# Build-Specific Configuration

## tl;dr

- If you need any configuration to be used by the AOT compiler (e.g. Angular decorators), they must be statically
  analyzable (i.e. their values knowable at build-time). Creative ideas like injecting globals with an entirely
  separate script won't work.
- ngx-rocket comes with a very helpful `env` script that will save environment-variables set at build time to constants
  that can be used as configuration for your code.
- If you want to go full-blown [Twelve-Factor](https://12factor.net/config):
  * use the ngx-rocket `env` script along with environment variables for all build-specific configuration used by your
    codebase
  * only separate angular workspace "build-angular:browser" configurations if the actual build settings differ
    (e.g. sourcemaps, optimization, etc). Even then, it can be avoided via individual commandline overrides.
- On the opposite extreme of the spectrum, you can keep all build-specific configuration in a separate environment
  file for each environment using Angular's built-in `fileReplacements`, but then you'll need a separate environment 
  file even for deployment-specific configuration (like hostnames), which can get out of hand fast.
- For a middle-of-the-road approach, you can divide configuration into two groups:
  * Configuration shared by each environment-type:
    - Environment-type examples include local development, staging/qa, test, production... 
    - Examples of configuration like this include:
      * In test, animations are always disabled, but for all other environments, they're enabled
      * In production, the payment gateway's publishable key is the live key, but all other environments use the
        test key
  * Configuration that sometimes needs to be specific to an individual deployment of a given environment:
    - Examples of configuration like this include:
      * This particular staging/qa server's base for constructing URLs is qa-stable.example.com, but qa/staging
        environments could also be deployed to preprod.example.com or localhost:8081 or anywhereelse:7000.
      * This particular deployment uses a specific bucket for Amazon S3 uploads
  * In this approach, you can use Angular's `fileReplacements` for anything environment-specific and ngx-rocket's
    `env` for anything deployment-specific. You can even have certain deployment-specific configuration fall back
    to environment-specific defaults for certain environments like so:
      ```javascript
      export const environment = {
        // ...
          BROWSER_URL: env.BROWSER_URL || 'https://qa.example.com',
        // ...
      }
      ```
- If you have lots of environment variables, you can make a `.env` file in shell syntax, and use your particular
  shell's method to source it before running the ngx-rocket env tool (e.g. `source .env && npm env` in bourne-like
  shells or `env.bat; npm env` in windows).
  * If you are and have a full-stack app in a monorepo, keep a separate `.env` file for server-side and client-side
    config, and make sure `.env` files are .gitignore'd and that secrets never make it into client-side `.env` file. 
- Development server API proxy config can read runtime environment variables, so you can avoid having a superficial
  dev-server configuration by taking advantage of them.
- SSR works by building all the client bundles like normal, but then rendering them in real-time.  So,
  * the rest of your app from `main.server.ts` down has access to your build-time environment only, like your normal
    client bundles
  * but `server.ts` (the file configuring and running express) has access to your serve-time environment variables

## Introduction

When building any maintainable application, a separation of configuration and code is always desired. In the case
of configuration, some of it will need to vary from environment to environment, build to build, or deployment to
deployment.

This guide focuses on this type of build-specific configuration in a very broad sense of an Angular app, describing
the specific Angular ways of controlling these configurations, detailing some angular-specific challenges, and
highlighting some ngx-rocket tooling that help with them in mind.

For an even broader non-Angular introduction of these concepts, see the
[The Twelve-Factor App](https://12factor.net/config) methodology's opinions on how this type of configuration
should be managed.

## Types of configuration

At the highest level, build-specific configuration can be divided into two categories:

1. Configuration for how your app is built and served
2. Configuration used by your codebase

### Configuration for how your app is built and served

This type of build-specific configuration is not used by your code, but is used to control the build system itself.
Configuration like this goes into Angular's
[workspace configuration](https://angular.io/guide/workspace-config#alternate-build-configurations). Instead of
rehashing existing documentation on this, this document will highlight how it relates to this subject. Namely, the 
fact that in addition to specifying *HOW* the app is built for each build configuration, the workspace configuration
allows mapping each build configuration to a separate environment configuration file for your codebase as well.  It
also allows for making separate dev-server configurations in case you need to run it differently.

Therefore, each build configuration in the workspace configuration file is a tuple of
(how-to-build, environment-file-for-codebase), and you'll need a separate configuration for each combination.

## Angular's out-of-the-box environment configuration

### When it works well

This setup works quite well for configuration that's shared among all instances of an environment, like the following
examples:

- **test** environment always builds without source maps, disables animations, uses a recaptcha test key, and disables
  analytics
- **dev** environment always builds with source maps, enables animations, uses a recaptcha live key, and disables
  analytics
- **qa** environment always builds with source maps, enables animations, uses a recaptcha live key, and disables
  analytics
- **prod** environment always builds without source maps, enables animations, uses a recaptcha live key, and enables
  analytics

### Limitations of Angular's `fileReplacements`

But for certain deployment-specific configuration, things start to get really hairy, like in these examples:

- QA build configuration needs to be built for local deployment, deployment to a server on the internet for QA
  purposes, and also deployment to another server on the internet for staging purposes
- Production build needs multiple different deployments of the same app to different servers

These cases can cause problems when:

- Each deployment needs a separate API URL
- Each deployment needs a separate URL for building its own URLs to where it's deployed
- Each deployment needs separate API keys, bucket names, etc

You *COULD* start creating separate configurations for each deployment, each with its own `fileReplacements`, but that
would be really messy.

### Workarounds that don't work well

One workaround would be to keep such configurations as globals in a separate deployment-specific script file. But
that's pretty messy too. More importantly, there are limitations to where they can be used. For example, because
of AOT, such configuration variables cannot be used in Angular's decorators, because they're not statically
analyzable. So it would be better if we can keep everything in the same place.

### ngx-rocket to the rescue

The `env` task solves this problem really well, and avoids the need for separate `environment.ts` files for
deployment-specific configuration. 

To add a deployment-specific configuration:

1. edit the existing `environment.ts` files for whichever environments you'd like to make that variable
   deployment-specific for by having it come from the imported "env" object - pro tip: you can even make it fall
   back to an environment-based default and still be statically analyzable!
2. add that variable name to the npm script's `env` task

Now, as long as you have that environment variable set in the shell running the build, the `env` task will save it into
the `.env` file before building.

If you really want, you can take things even further to the twelve-factor extreme, and you can even eliminate the
need for `fileReplacements` entirely, and make all configuration come from environment variables.  Whether this will be
the right approach for your project will be up to you.

If you do decide to take that approach, your list of environment variables will probably get very long, so you can
create a .gitignore'd `.env` file with all the variables set, and source it with your shell (e.g. `source .env && npm
env` in bourne-like shells or `env.bat; npm env` in windows).

## When you can use environment variables directly without ngx-rocket `env`

As a sidenote, ngx-rocket `env` isn't used for the proxy config file, because it isn't built and ran separately.
Fortunately, for that same reason, you can directly use `process.env` within the proxy config file to avoid having
separate proxy configs in most cases.

On that same note, the `server.ts` for SSR builds can also access `process.env` as it's set at runtime.  But keep in mind
that it stops there - the app itself is built, so even in SSR the app can't access process environment variables.

## Security Considerations

Never forget that your entire Angular app goes to the client, including its configuration, including the environment
variables you pass to the env task!  As usual, you should **never add sensitive keys or secrets to the env task**.

Finally, if your Angular project is the client-side of a full-stack monorepo, make sure to keep the client-side `.env`
file separate from the server-side `.env` file, since your server-side is bound to have secrets.
