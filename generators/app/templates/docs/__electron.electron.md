# Using Electron

[Electron](https://electronjs.org) is a platform bridge allowing you to build desktop applications using web
technologies.

Its runtime is based on [Node.js](https://nodejs.org) and [Chromium](https://www.chromium.org/Home), and
allows you to package standalone applications for Windows, Mac and Linux.

Electron applications are composed by 2 main parts:
- The *main process* that is executing the `electron.main.ts` script, and that spawns one (or more) instances of
  `BrowserWindow` to run web pages in dedicated render processes.
- The *render process* that renders your web page (your Angular application). There is as many render processes
  as there is `BrowserWindow` instances. One special feature of Electron is that your web pages can make use of
  the Node.js API to manage low-level interaction with the host operating system.

Read more about specific features of Electron application architecture in the
[official documentation](https://electronjs.org/docs/tutorial/application-architecture).

## Common tasks

> Important note: Electron support in ngX-Rocket is considered **experimental** at this point, and though it
> includes all you need to build complete applications, the developer experience and provided tooling may is very
> rough at this stage and will be improved other time (you can also help us to accelerate development, see
> https://github.com/ngx-rocket/generator-ngx-rocket/issues/418 :wink:)

### Running the application

Use these commands to run the application:
```sh
npm run electron:build && npm run electron:run
```

To run an instance of your application with live reload enabled, you have to run these commands in separate processes:
```sh
npm run start                        // start the Angular app server
npm run electron:compile -- --watch  // recompile Electron code automatically
```

And then start the electron app in live reload mode:
```sh
npm run electron:run -- --serve
```

### Packaging applications for distribution

To build standalone packages of your application for all your supported targets, run:
```sh
npm run electron:package
```

Alternatively, you can build a package for one specific target platform using:
```sh
npm run electron:package:<windows|mac|linux>
```

The build packages will be then located in the `dist.packages` folder.

> Note: in order to build Windows packages from non-Windows platform, you need to install
> [Wine](https://www.winehq.org) 1.6 or later.
> See [electron-packager documentation](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms)
> for more details.
