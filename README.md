# generator-ngx-app

[![NPM version](https://img.shields.io/npm/v/generator-ngx-app.svg)](https://www.npmjs.com/package/generator-ngx-app)
[![Build status](https://img.shields.io/travis/angular-starter-kit/generator-ngx-app/master.svg)](https://travis-ci.org/angular-starter-kit/generator-ngx-app)
[![Downloads](https://img.shields.io/npm/dt/generator-ngx-app.svg)](https://npmjs.org/package/generator-ngx-app)

Web project starter kit including modern tools and workflow based on
[angular-cli](https://github.com/angular/angular-cli), best practices from the community, a scalable base template and
a good learning base.

See generated project example [here](https://github.com/angular-starter-kit/ngx-starter-kit).

### Benefits

- Quickstart a project in seconds and focus on features, not on frameworks or tools

- Industrial-grade tools, ready for usage in a continuous integration environment and DevOps

- Scalable architecture with base app template including example components, services and tests

![logo](https://cloud.githubusercontent.com/assets/593151/23604024/a9729c78-0257-11e7-8c60-0882a98bad41.png)

# Getting started

1. Install required tools:
 ```bash
 npm install -g yo generator-ngx-app
 ```

2. Create your application:
 ```bash
 yo ngx-app
 ```
 
# Project structure

```
dist/                        compiled version
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

Tasks                         | Description
------------------------------|---------------------------------------------------------------------------------------
npm start                     | Run development server on `http://localhost:4200/`
npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder
npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
npm run test:ci               | Lint code and run unit tests once for continuous integration
npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)
npm run lint                  | Lint code
npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json`
npm run docs                  | Display project documentation

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
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)

#### Libraries

- [Angular 2](https://angular.io)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ng-bootsrap](https://ng-bootstrap.github.io/)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

#### Coding guides

- [Angular](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/coding-guides/angular.md)
- [TypeScript](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/coding-guides/typescript.md)
- [Sass](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/coding-guides/sass.md)
- [HTML](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/coding-guides/html.md)
- [Unit tests](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/coding-guides/unit-tests.md)
- [End-to-end tests](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/i18n.md)
- [Working behind a corporate proxy](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/corporate-proxy.md)
- [Updating dependencies and tools](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/updating.md)
- [Using a backend proxy for development](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/backend-proxy.md)
- [Browser routing](https://github.com/angular-starter-kit/ngx-starter-kit/blob/master/docs/routing.md)

# License

[MIT](LICENSE)
