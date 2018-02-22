# :rocket: generator-ngx-rocket

[![NPM version](https://img.shields.io/npm/v/generator-ngx-rocket.svg)](https://www.npmjs.com/package/generator-ngx-rocket)
[![Build status](https://img.shields.io/travis/ngx-rocket/generator-ngx-rocket/master.svg)](https://travis-ci.org/ngx-rocket/generator-ngx-rocket)
[![Windows build status](https://ci.appveyor.com/api/projects/status/github/ngx-rocket/generator-ngx-rocket?svg=true&branch=master)](https://ci.appveyor.com/project/sinedied/generator-ngx-rocket/branch/master)
![Node version](https://img.shields.io/badge/node-%3E%3D6.0.0-brightgreen.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Downloads](https://img.shields.io/npm/dt/generator-ngx-rocket.svg)](https://npmjs.org/package/generator-ngx-rocket)

![ngx-rocket logo](https://user-images.githubusercontent.com/593151/28924751-08023b32-7863-11e7-9186-c17d4647d861.png)

> Extensible Angular 5+ enterprise-grade project generator based on
> [angular-cli](https://github.com/angular/angular-cli) with best practices from the community.
> Includes PWA and Cordova support, coding guides and more!

See generated project example [here](https://github.com/ngx-rocket/starter-kit).

### Benefits versus bare `angular-cli` projects

- **A complete starter template:** example app structure tailored for scalability, with examples and boilerplate code
  for every common thing needed in enterprise projects, such as unit tests, routing, authentication, HTTPS service
  extensions, i18n support with dynamic language change and automatic user language detection...
  
- **Improved tooling:** SCSS & HTML linting, stricter TSLint rules, markdown-based local wiki server for documentation,
  automated localizable strings extraction, corporate proxy support, [Cordova](https://cordova.apache.org) integration

- **Extensive base documentation:** [coding guides](#coding-guides) for TypeScript/SCSS/HTML, Angular onboarding guide,
  corporate proxy and other tools [configuration and usage](#other-documentation)...
  
- **Ready-to-use UI components:** focus on your app, not on the stack! [Choose](#libraries) between a
  [Bootstrap 4](https://getbootstrap.com/), [Ionic](http://ionicframework.com) or
  [Angular Material](https://material.angular.io) based UI with nicely looking, responsive starter templates
  
- **Mobile app support:** choose between a web app, a mobile app (using [Cordova](https://cordova.apache.org)) or both
  using the same code base

- **API proxy example setup:** develop and debug faster using any remote server

- **Generator output customization:** with the provided
  [add-on support](https://github.com/ngx-rocket/generator-ngx-rocket/tree/master/generators/addon), start multiple
  projects even faster by plugging in additions that fit your needs, such as your enterprise theme, SSO authentication,
  services integrations...

And there's even more! See [What's in the box](#whats-in-the-box) for more details.

# Getting started

## Using [ngX-Rocket CLI](https://github.com/ngx-rocket/generator-ngx-rocket/tree/master/cli)

1. Install required tools:
 ```sh
 npm install -g generator-ngx-rocket
 ```

2. Create your application:
 ```sh
 ngx new
 ```

# Project structure

The structure follows [Angular style guide](https://angular.io/guide/styleguide).

```
dist/                        app production build
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Task                            | Description
--------------------------------|---------------------------------------------------------------------------------------
`npm start`                     | Run development server on `http://localhost:4200/`
`npm run serve:sw`              | Run test server on `http://localhost:4200/` with service worker enabled
`npm run build [-- --env=prod]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` 
`npm test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
`npm run test:ci`               | Lint code and run unit tests once for continuous integration
`npm run e2e`                   | Run e2e tests using [Protractor](http://www.protractortest.org)
`npm run lint`                  | Lint code
`npm run translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
`npm run docs`                  | Display project documentation

Additional tasks for Cordova-based projects:

Task                            | Description
--------------------------------|---------------------------------------------------------------------------------------
`npm run cordova:prepare`       | Prepare for building mobile app (restore Cordova platforms and plugins)
`npm run cordova:run <ios/android> [--device]` | Run app on target platform device or simulator
`npm run cordova:build [-- --env=prod]`        | Build mobile app for production in `dist/` folder
`npm run cordova:clean`         | Removes `www/`, `platforms/` and `plugins/` folders

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

# What's in the box

![starter kit](https://cloud.githubusercontent.com/assets/593151/23604024/a9729c78-0257-11e7-8c60-0882a98bad41.png)

The app template is based on [HTML5](http://whatwg.org/html), [TypeScript](http://www.typescriptlang.org) and
[Sass](http://sass-lang.com). The translation files use the common [JSON](http://www.json.org) format.

#### Tools

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and
  [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io), [Karma](https://karma-runner.github.io) and
  [headless Chrome](https://github.com/GoogleChrome/puppeteer)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)

[Progressive Web App (PWA)](https://developers.google.com/web/progressive-web-apps/) support provided by
[@angular/service-worker](https://docs.google.com/document/d/1F0e0ROaZUnTFftmC0XovpREHWHjcXa4CggiFlmifjhw/). 

Native mobile application bundling is based on [Cordova](https://cordova.apache.org).
[Ionic WKWebView](https://github.com/ionic-team/cordova-plugin-ionic-webview) is used for iOS for better performance.

#### Libraries

- [Angular](https://angular.io)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
- UI based on:
  * Bootstrap
    - [Bootstrap 4](https://getbootstrap.com)
    - [ng-bootsrap](https://ng-bootstrap.github.io/)
    - [Font Awesome](http://fontawesome.io)
  * Ionic:
    - [Ionic](http://ionicframework.com)
    - [Ionic Native](https://ionicframework.com/docs/native/)
  * Angular Material
    - [Angular Material](https://material.angular.io)
    - [Angular Flex Layout](https://github.com/angular/flex-layout)
    - [Material Icons](https://material.io/icons/)


#### Coding guides

- [Angular](https://github.com/ngx-rocket/starter-kit/blob/master/docs/coding-guides/angular.md)
- [Ionic](https://github.com/ngx-rocket/starter-kit/blob/cordova/ionic/docs/coding-guides/ionic.md)
- [TypeScript](https://github.com/ngx-rocket/starter-kit/blob/master/docs/coding-guides/typescript.md)
- [Sass](https://github.com/ngx-rocket/starter-kit/blob/master/docs/coding-guides/sass.md)
- [HTML](https://github.com/ngx-rocket/starter-kit/blob/master/docs/coding-guides/html.md)
- [Unit tests](https://github.com/ngx-rocket/starter-kit/blob/master/docs/coding-guides/unit-tests.md)
- [End-to-end tests](https://github.com/ngx-rocket/starter-kit/blob/master/docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](https://github.com/ngx-rocket/starter-kit/blob/master/docs/i18n.md)
- [Working behind a corporate proxy](https://github.com/ngx-rocket/starter-kit/blob/master/docs/corporate-proxy.md)
- [Updating dependencies and tools](https://github.com/ngx-rocket/starter-kit/blob/master/docs/updating.md)
- [Using a backend proxy for development](https://github.com/ngx-rocket/starter-kit/blob/master/docs/backend-proxy.md)
- [Browser routing](https://github.com/ngx-rocket/starter-kit/blob/master/docs/routing.md)
- [Cordova](https://github.com/ngx-rocket/starter-kit/blob/cordova/ionic/docs/cordova.md)

## Generator options

- `--packageManager [npm|yarn]`: specify whether to use [Yarn](https://yarnpkg.com) or NPM as your package manager
 (default is NPM).
 You can also use the environment variable `NGX_PACKAGE_MANAGER` to set this option globally. 
- `--automate <json_file>`: automate prompt answers using specified JSON file (see
  [here](https://github.com/ngx-rocket/generator-ngx-rocket/tree/master/scripts/tests) for examples).
- `--addons <addon_name> [<addon_name>] ...`: space-separated list of add-on to use.
- `--no-update`: do no update existing project (see also [updating generated projects](#updating-generated-projects)). 
- `--no-analytics`: do not report anonymous usage analytics.
  You can also use the environment variable `NGX_DISABLE_ANALYTICS` to set this option globally.
- `--external-chrome`: use external Chrome executable and avoid downloading a Chromium binary via
  [puppeteer](https://github.com/GoogleChrome/puppeteer) to run unit tests.
  **Note:** You need a Chrome version `>= 59` that can run in 
  [headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome) or you will have errors.
- `--raw`: do not use any UI library for templates
  
## Updating generated projects

As new features and newer libraries and tools are added to the generator, you may want to update your project at some
point. Here is how we suggest you to do it:

1. Make sure your working directory is clean (no pending / uncommited changes).
2. Run `ngx update` using the [CLI](cli/README) inside your project folder.
3. The generator will then run again using the same options you used initially, prompting you for each file change.
   From there the recommended approach is simply to overwrite everything.
4. Finally, use your source control to see the diff for each file and merge the changes manually.

In the future, [an option](https://github.com/ngx-rocket/generator-ngx-rocket/issues/144) will be added to update only
the dependencies and toolchain in order to limit the manual merge operations.

## Customize project generation

You can customize the generator output to change or enhance it to better suit your needs using
[add-ons](https://www.npmjs.com/search?q=ngx-rocket-addon).

To create a new add-on, you can use the `addon` sub-generator of the [CLI](https://github.com/ngx-rocket/generator-ngx-rocket/tree/master/cli):
```sh
ngx new --addon
```
 
See the [add-on generator documentation](https://github.com/ngx-rocket/generator-ngx-rocket/tree/master/generators/addon)
for more information about add-on creation.

# Contributing

See [contributing guide](CONTRIBUTING.md)

# License

[MIT](LICENSE)
