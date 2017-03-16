'use strict';

const _ = require('lodash');
const yosay = require('yosay');
const chalk = require('chalk');
const dir = require('node-dir');
const path = require('path');
const Insight = require('insight');
const Generator = require('yeoman-generator');

const options = require('./options.json');
const prompts = require('./prompts.json');
const pkg = require('../../package.json');

const excludeFiles = [
  '.DS_Store',
  'Thumbs.db'
];

const prefixRules = {
  _mobile:    (props) => props.target !== 'web',
  _web:       (props) => props.target !== 'mobile',
  _bootstrap: (props) => props.ui === 'bootstrap',
  _ionic:     (props) => props.ui === 'ionic',
  _auth:      (props) => !!props.auth
};

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);

    this.version = pkg.version;
    this.insight = new Insight({ trackingCode: 'UA-93069862-1', pkg });

    this.argument('appName', {
      desc: 'Name of the app to generate',
      type: String,
      required: false
    });

    // Use options from json
    options.forEach((option) => {
      this.option(option.name, {
        type: global[option.type],
        required: option.required,
        desc: option.desc,
        defaults: option.defaults
      });
    });
  }

  initializing() {
    this.insight.optOut = !this.options['analytics'] || process.env.DISABLE_NGX_ANALYTICS;

    if (this.options['update']) {
      this.props = this.config.get('props');
    }

    if (this.props) {
      let fromVersion = this.config.get('version');
      if (fromVersion >= this.version) {
        this.log(chalk.green('\nNothing to update, it\'s all good!\n'));
        process.exit(0);
      }

      this.log(`\nUpdating ${chalk.green(this.props.appName)} project (${chalk.yellow(fromVersion)} -> ${chalk.yellow(this.version)})\n`);
      this.log(`${chalk.yellow('Make sure you don\'t have uncommitted changes before overwriting files!')}`);
      this.insight.track('generator', 'update', fromVersion, 'to', this.version);

    } else if (!this.options['skip-welcome']) {
      this.log(yosay(`${chalk.green('Welcome!')}\nLet\'s generate an awesome Angular app!`));
    }

    this.insight.track('generator', this.version);
    this.insight.track('node', process.version);
    this.insight.track('platform', process.platform);
  }

  prompting() {
    this.props = this.props || {};
    let processProps = (props) => {
      props.appName = this.props.appName || props.appName || this.options.appName;
      props.projectName = _.kebabCase(props.appName);
      _.extend(this.props, props);
    };

    if (this.options.automate) {
      // Do no prompt, use json file instead
      let props = require(path.resolve(this.options.automate));
      processProps(props);
    } else {
      let namePrompt = _.find(prompts, { name: 'appName' });
      namePrompt.default = this.appname;
      namePrompt.when = () => !this.options.appName;
      _.remove(prompts, (p) => this.props[p.name] !== undefined);

      return this.prompt(prompts).then(processProps);
    }
  }

  preparing() {
    return new Promise((resolve) => {
      // TODO: update with chosen options
      this.insight.track('generator', 'web', 'boostrap');

      let filesPath = path.join(__dirname, 'templates');

      dir.files(filesPath, (err, files) => {
        if (err) throw err;

        // Removes excluded files
        _.remove(files, (file) => {
          return !_.every(excludeFiles, (excludeFile) => {
            return !_.includes(file, excludeFile);
          });
        });

        this.files = _.map(files, (file) => {
          let src = path.relative(filesPath, file);
          let isTemplate = _.startsWith(path.basename(src), '_');
          let hasFileCondition = _.startsWith(path.basename(src), '__');
          let hasFolderCondition = _.startsWith(path.dirname(src), '_');
          let dest = path.relative(hasFolderCondition ? path.dirname(src).split(path.sep)[0] : '.', src);

          if (hasFileCondition) {
            let fileName = path.basename(src).replace(/__.*?[.]/, '_');
            dest = path.join(path.dirname(src), fileName);
          }

          if (isTemplate) {
            dest = path.join(path.dirname(dest), path.basename(dest).slice(1));
          }

          return {
            src: src,
            dest: dest,
            template: isTemplate,
            hasFileCondition: hasFileCondition,
            hasFolderCondition: hasFolderCondition
          };
        });

        resolve();
      });
    });
  }

  writing() {
    this.files.forEach((file) => {
      let write = !file.hasFolderCondition || _.every(prefixRules, (rule, folder) => {
        return !_.startsWith(path.dirname(file.src), folder) || rule(this.props);
      });

      write = write && (!file.hasFileCondition || _.every(prefixRules, (rule, prefix) => {
        return !_.startsWith(path.basename(file.src), '_' + prefix) || rule(this.props);
      }));

      if (write) {
        try {
          if (file.template) {
            this.fs.copyTpl(this.templatePath(file.src), this.destinationPath(file.dest), this);
          } else {
            this.fs.copy(this.templatePath(file.src), this.destinationPath(file.dest));
          }
        } catch (error) {
          this.log(chalk.red(`\nTemplate processing error on file ${file.src}`));
          throw error;
        }
      }
    });
  }

  install() {
    this.config.set('version', this.version);
    this.config.set('props', this.props);
    this.config.save();

    const skipInstall = this.options['skip-install'];

    if (!skipInstall) {
      this.log(`\nRunning ${chalk.yellow('npm install')}, please wait...`);
    }

    this.installDependencies({
      bower: false,
      skipInstall: skipInstall,
      skipMessage: true,
      callback: () => {
        // if (!this.options['skip-install']) {
        //   // Prepare Cordova platforms
        //   if (this.props.target !== 'web') {
        //     this.spawnCommandSync('npm', ['prepare']);
        //   }
        // }
      }
    });
  }

  end() {
    this.log('\nAll done! Get started with these tasks:');
    this.log(`- $ ${chalk.green('npm start')}: start dev server with live reload on http://localhost:4200`);
    this.log(`- $ ${chalk.green('npm run build')}: build app for production`);
    this.log(`- $ ${chalk.green('npm test')}: run unit tests in watch mode for TDD`);
    this.log(`- $ ${chalk.green('run test:ci')}: lint code and run units tests with coverage`);
    this.log(`- $ ${chalk.green('run e2e')}: launch e2e tests`);
    this.log(`- $ ${chalk.green('run docs')}: show docs and coding guides\n`);
  }

};
