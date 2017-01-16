# ngX Starter Kit

Web project starter kit including modern tools and workflow based on [angular-cli](https://github.com/angular/angular-cli), best practices from the community, a scalable base template and a good learning base.

> Note: This project is still under development, see the [current status](#current-status) section for more information.

# Getting started

1. Install required tools:
 ```
 npm install -g angular-cli
 ```

2. Go to project folder then install dependencies:
 ```
 npm install
 ```
 
3. Launch development server, and open `localhost:4200` in your browser:
 ```
 npm start
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
npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org) (`npm start` must be run beforehand)
npm run lint                  | Lint code
npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.pot`

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `production`. See [this documentation](docs/build-environments.md) for more details about multiple build environments management.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the [Angular-CLI README](https://github.com/angular/angular-cli).

# Current status
