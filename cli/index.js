'use strict';

const path = require('path');
const fs = require('fs');
const child = require('child_process');
const Conf = require('conf');
const inquirer = require('inquirer');
const env = require('yeoman-environment').createEnv();
const chalk = require('chalk');
const figures = require('figures');
const get = require('lodash.get');
const minimist = require('minimist');
const updateNotifier = require('update-notifier');
const asciiLogo = require('@ngx-rocket/ascii-logo');
const pkg = require('../package.json');

const isWin = /^win/.test(process.platform);
const addonKey = 'ngx-rocket-addon';
const disabledAddons = 'disabledAddons';
const blacklistedNpmAddons = [
  'generator-ngx-rocket',
  'generator-ngx-rocket-addon'
];
const appName = path.basename(process.argv[1]);
const help = `${chalk.bold(`Usage:`)} ${appName} ${chalk.blue(`[new|update|config|list|<script>]`)} [options]\n`;
const detailedHelp = `
${chalk.blue('n, new')} [name]
  Creates a new app.
  -a, --addon                 Creates an add-on instead.
  --packageManager <yarn|npm> Uses specified package manager.
  --automate <json_file>      Automates prompt answers using JSON file.
  --tools                     Generates only the toolchain
  
${chalk.blue('u, update')}
  Updates an existing app or add-on.
  --tools                     Updates only the toolchain
  
${chalk.blue('c, config')}
  Configures add-ons to use for new apps.
  All available add-ons are used by default.

${chalk.blue('l, list')}
  Lists available add-ons.
  -n, --npm    Show installable add-ons on NPM
  
${chalk.blue('<script>')}
  Runs specified script from your ${chalk.bold(`package.json`)}.
  Works just like ${chalk.bold(`npm run <script>`)}
`;

class NgxCli {
  constructor(args) {
    this._args = args;
    this._options = minimist(args, {
      boolean: ['help', 'npm', 'addon', 'packageManager'],
      alias: {
        n: 'npm',
        a: 'addon'
      }
    });
    this._config = new Conf({
      defaults: {
        disabledAddons: {}
      }
    });

    env.register(require.resolve('..'), 'ngx-rocket');
  }

  run() {
    updateNotifier({pkg}).notify();

    if (this._options.help) {
      return this._help(true);
    }
    switch (this._args[0]) {
      case 'n':
      case 'new':
        return this.generate(false, this._args.slice(1), this._options.addon);
      case 'u':
      case 'update':
        return this.generate(true, this._args.slice(1), this._options.addon);
      case 'c':
      case 'config':
        return this.configure();
      case 'l':
      case 'list':
        return this.list(this._options.npm);
      default:
        this.runScript(this._args);
    }
  }

  runScript(args) {
    const name = args[0];
    const packageFile = this._findPackageJson(process.cwd());
    const packageManager = this._packageManager();
    const projectPackage = packageFile ? require(packageFile) : null;
    if (!projectPackage) {
      this._help();
    }

    let scriptName = name;
    if (!projectPackage.scripts[name]) {
      const matches = this._findMatches(name, Object.keys(projectPackage.scripts));
      if (!matches) {
        this._help();
      }
      scriptName = matches[0];
      if (matches.length > 1) {
        console.warn(chalk.yellow(`Warning, multiple matching scripts. Try to be more specific.`));
      }
    }

    child.spawnSync(
      packageManager,
      ['run', scriptName].concat(packageManager === 'npm' ? ['--'] : [], args.splice(1)),
      {
        stdio: 'inherit',
        shell: isWin
      }
    );
  }

  generate(update, args, addon) {
    if (!update) {
      console.log(asciiLogo(pkg.version));
    } else if (fs.existsSync('.yo-rc.json')) {
      const rc = JSON.parse(fs.readFileSync('.yo-rc.json'));
      addon = Boolean(get(rc, 'generator-ngx-rocket.props.isAddon'));
    } else {
      this._exit(`No existing app found, use ${chalk.blue('ngx new')} instead`);
    }
    if (addon) {
      args = args.filter(arg => arg !== '--addon' && arg !== '-a');
      env.lookup(() => env.run(['ngx-rocket:addon'].concat(args), {
        update,
        packageManager: this._packageManager(),
        'skip-welcome': true
      }));
    } else {
      const disabled = this._config.get(disabledAddons);
      return this._findAddons()
        .then(addons => addons.filter(addon => !disabled[addon]))
        .then(addons => {
          return new Promise(resolve => env.lookup(() => env.run(['ngx-rocket'].concat(args), {
            update,
            packageManager: this._packageManager(),
            addons: addons.join(' '),
            'skip-welcome': true
          }, resolve)));
        })
        .then(() => console.log());
    }
  }

  configure() {
    this._findAddons().then(addons => {
      const disabled = this._config.get(disabledAddons);
      inquirer
        .prompt({
          type: 'checkbox',
          name: 'addons',
          message: 'Choose add-ons to use for new apps',
          choices: addons.map(addon => ({
            name: addon,
            checked: !disabled[addon]
          }))
        })
        .then(answers => {
          this._config.set(disabledAddons, addons
            .filter(addon => !answers.addons.includes(addon))
            .reduce((r, addon) => {
              r[addon] = true;
              return r;
            }, {}));
          console.log('Configuration saved.');
        });
    });
  }

  list(npm) {
    let promise;
    if (npm) {
      promise = Promise
        .resolve(child.execSync(`npm search ${addonKey} --json`, {stdio: [0, null, 2]}))
        .then(addons => addons ? JSON.parse(addons) : [])
        .then(addons => addons.filter(addon => blacklistedNpmAddons.indexOf(addon.name) === -1));
    } else {
      promise = this._findAddons();
    }
    promise.then(addons => {
      const disabled = this._config.get(disabledAddons);
      console.log(chalk.blue(`Available add-ons${npm ? ' on NPM' : ''}:`));

      if (!addons.length) {
        console.log('  No add-ons found.');
      } else if (npm) {
        addons.forEach(addon => console.log(`  ${addon.name}@${addon.version} - ${addon.description}`));
      } else {
        addons.forEach(addon => console.log(`${chalk.green(disabled[addon] ? ' ' : figures.tick)} ${addon}`));
      }
    });
  }

  _findAddons() {
    return new Promise(resolve => {
      env.lookup(() => {
        const generators = env.getGeneratorsMeta();
        const addons = Object.keys(generators)
          .map(alias => generators[alias])
          .filter(generator => {
            const packagePath = this._findPackageJson(generator.resolved);
            const keywords = require(packagePath).keywords || [];
            return keywords.includes(addonKey);
          })
          .map(generator => generator.namespace.replace(/(.*?):app$/, '$1'));
        resolve(addons);
      });
    });
  }

  _findPackageJson(basePath) {
    const find = components => {
      if (!components.length) {
        return null;
      }
      const dir = path.join.apply(path, components);
      const packageFile = path.join(dir, 'package.json');
      return fs.existsSync(packageFile) ? packageFile : find(components.slice(0, -1));
    };

    const components = basePath.split(/[/\\]/);
    if (components.length && !components[0].length) {
      // When path starts with a slash, the first path component is empty string
      components[0] = path.sep;
    }
    return find(components);
  }

  _packageManager() {
    if (this._options.packageManager) {
      return this._options.packageManager === 'yarn' ? 'yarn' : 'npm';
    }
    let pm = null;
    try {
      const rc = require(path.join(process.cwd(), '.yo-rc.json'));
      pm = rc['generator-ngx-rocket'].props.packageManager;
    } catch (err) {
      // Do nothing
    }
    return pm || process.env.NGX_PACKAGE_MANAGER || 'npm';
  }

  _help(details) {
    console.log(asciiLogo(pkg.version));
    this._exit(help + (details ? detailedHelp : `Use ${chalk.white(`--help`)} for more info.\n`));
  }

  _findMatches(search, strings) {
    const matches = [];
    for (const s of strings) {
      if (s.startsWith(search)) {
        matches.push(s);
      }
    }
    return matches.length > 0 ? matches : null;
  }

  _exit(error, code = 1) {
    console.error(error);
    process.exit(code);
  }
}

module.exports = NgxCli;
