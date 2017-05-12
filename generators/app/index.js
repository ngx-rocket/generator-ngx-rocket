'use strict';

const yosay = require('yosay');
const chalk = require('chalk');
const Insight = require('insight');
const Generator = require('@ngx-rocket/core');

const options = require('./options.json');
const prompts = require('./prompts.json');
const pkg = require('../../package.json');

class NgxGenerator extends Generator {

  initializing() {
    this.version = pkg.version;
    this.insight = new Insight({ trackingCode: 'UA-93069862-1', pkg });

    this.argument('appName', {
      desc: 'Name of the app to generate',
      type: String,
      required: false
    });

    this.insight.optOut = !this.options['analytics'] || process.env.DISABLE_NGX_ANALYTICS;

    // Updating
    let fromVersion = null;

    if (this.options['update']) {
      this.props = this.config.get('props') || {};
      fromVersion = this.config.get('version');
    }

    if (fromVersion) {
      if (fromVersion >= this.version) {
        this.log(chalk.green('\nNothing to update, it\'s all good!\n'));
        process.exit(0);
      }

      this.updating = true;
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
    return Promise.resolve()
      .then(() => super.prompting())
      .then(() => this.sharedProps = this.props);
  }

  preparing() {
    this.insight.track('generator', 'web', 'bootstrap');
    return super.preparing();
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
    if (this.updating) {
      this.log(`\nUpdated ${chalk.green(this.props.appName)} to ${chalk.yellow(this.version)} successfully!\n`);
      return;
    }

    this.log('\nAll done! Get started with these tasks:');
    this.log(`- $ ${chalk.green('npm start')}: start dev server with live reload on http://localhost:4200`);
    this.log(`- $ ${chalk.green('npm run build')}: build app for production`);
    this.log(`- $ ${chalk.green('npm test')}: run unit tests in watch mode for TDD`);
    this.log(`- $ ${chalk.green('run test:ci')}: lint code and run units tests with coverage`);
    this.log(`- $ ${chalk.green('run e2e')}: launch e2e tests`);
    this.log(`- $ ${chalk.green('run docs')}: show docs and coding guides\n`);
  }

}

module.exports = Generator.make({
  baseDir: __dirname,
  generator: NgxGenerator,
  options: options,
  prompts: prompts
});
