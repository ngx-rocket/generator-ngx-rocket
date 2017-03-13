# Updating npm dependencies

- Check outdated packages
```bash
npm outdated 
```

- Update local packages according to `package.json`
```bash
npm update
```

- Upgrade packages manually
```bash
npm install --save[-dev] <package_name>@latest
```

Alternatively, you can use [npm-check](https://github.com/dylang/npm-check) to perform an interactive upgrade:
```bash
npm-check -u --skip-unused
```

## Locking package versions

It is recommended to use [npm shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap) to lock down all your dependencies
version and avoid unwanted package updates:
```bash
npm shrinkwrap --dev
```

This will create a file `npm-shrinkwrap.json` alongside your `package.json` files.
 
> Do not forget  to run shrinkwrap each time you manually update your dependencies! 

# Updating angular-cli

The `angular-cli` package needs extra care with updating, see
[this doc](https://github.com/angular/angular-cli#updating-angular-cli).
