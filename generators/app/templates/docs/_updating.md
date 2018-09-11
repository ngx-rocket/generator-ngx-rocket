# Updating npm dependencies

- Check outdated packages
```sh
<%= props.packageManager %> outdated
```

- Update local packages according to `package.json`
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn upgrade
<% } else { -%>
npm update
<% } -%>
```

- Upgrade packages manually
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn upgrade <package_name>@latest
```

To upgrade multiple package at once interactively, you can also use:
```sh
yarn upgrade-interactive --latest
```
<% } else { -%>
npm install --save[-dev] <package_name>@latest
```

Alternatively, you can use [npm-check](https://github.com/dylang/npm-check) to perform an interactive upgrade:
```sh
npm-check -u --skip-unused
```
<% } -%>

## Locking package versions

<% if (props.packageManager === 'yarn') { -%>
[Yarn](https://yarnpkg.com) generates a `yarn.lock` file automatically each time an install, update or upgrade command
is run, to ensure a reproducible dependency tree and avoid unwanted package updates.

If you need reproducible dependencies, which is usually the case with the continuous integration systems, you should
use `yarn install --frozen-lockfile` flag.
<% } else { -%>
Starting from `npm@5` a new `package-lock.json` file is
[automatically generated](https://docs.npmjs.com/files/package-locks) when using `npm install` commands, to ensure a
reproducible dependency tree and avoid unwanted package updates.

If you use a previous npm version, it is recommended to use [npm shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap) to
lock down all your dependencies version:
```sh
npm shrinkwrap --dev
```

This will create a file `npm-shrinkwrap.json` alongside your `package.json` files.

> Do not forget  to run shrinkwrap each time you manually update your dependencies!
<% } -%>

# Updating angular-related dependencies

See the [Angular update website](https://update.angular.io) to guide you through the updating/upgrading steps.
