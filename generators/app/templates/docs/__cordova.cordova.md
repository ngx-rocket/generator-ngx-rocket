# Using Cordova

[Cordova](https://cordova.apache.org/docs/en/latest/) is the platform bridge allowing you to build mobile applications
using web technologies.

It comes with its own [CLI](https://github.com/apache/cordova-cli) to manage compilation, platforms and plugins that
is usually installed globally.

However, we chose to use a local install for Cordova CLI, to allow version locking in `package.json`.
This way, you can use a different Cordova CLI version for each of your mobile projects, independently of the globally
installed version. This is also necessary as new updates often break project compilation.

You can manage Cordova CLI updates like any [NPM package](updating.md).

If you do not want this behavior and prefer using your global Cordova install, simply run:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn remove cordova
yarn global add cordova
<% } else { -%>
npm remove cordova --save-dev
npm install -g cordova
<% } -%>
```
The NPM scripts will then use the global version instead of a local one.

## Platform notes

Each Cordova platform may require specific tools to be installed for the command to work properly.
You can check anytime if your system meets the requirements for a given platform with:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova requirements <ios|android>
<% } else { -%>
npm run cordova -- requirements <ios|android>
<% } -%>
```

### iOS

To build the iOS version, you need to install [XCode](https://itunes.apple.com/app/xcode/id497799835).

To allow launching your app in simulator or device from command line, you need also:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn global add ios-sim
yarn global add ios-deploy
<% } else { -%>
npm install -g ios-sim
npm install -g ios-deploy
<% } -%>
```

See [Cordova documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#requirements-and-support)
for additional information.

### Android

To build the Android version, you need to install the
[Android SDK](http://developer.android.com/sdk/installing/index.html).

See [Cordova documentation](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#requirements-and-support)
for additional information.

## Common tasks

### Restoring platforms and plugins after a checkout
```sh
<%= props.packageManager %> run cordova:prepare
```

This will restore all your platforms and plugins according to your `config.xml` file.

### Adding a platform
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova platform add <ios|android>
<% } else { -%>
npm run cordova -- platform add <ios|android>
<% } -%>
```

### Adding a plugin
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova plugin add <plugin-name>
<% } else { -%>
npm run cordova -- plugin add <plugin-name>
<% } -%>
```

### Running the application
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova:run <ios|android> [--device]
<% } else { -%>
npm run cordova:run <ios|android> [-- --device]
<% } -%>
```

Run your application in specified platform emulator or device if you add the `--device` option.

### Packaging and signing apps

To create properly signed application packages for store publication, you have to configure your app provisioning in
the `build.json` file.

Here is an example configuration:
```json
{
  "ios": {
    "release": {
      "developmentTeam": "your_team_id",
      "codeSignIdentity": "iPhone Distribution"
    }
  },
  "android": {
    "release": {
      "keystore": "sign/your_android.keystore",
      "storePassword": "",
      "alias": "your_key",
      "password" : "your_password",
      "keystoreType": ""
    }
  }
}
```

This information will be used by the `<%= props.packageManager %> run cordova:build` task to generate production packages.

You can find more detailed documentation in the
[iOS signing guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#signing-an-app) or
[Android signing guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#signing-an-app).

### Updating plugins

To update a single plugin:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova plugin update <plugin_name>
<% } else { -%>
npm run cordova -- plugin update <plugin_name>
<% } -%>
```

Cordova does not include a mass update mechanism for plugins, but you can use the `cordova-check-plugins` tool:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn global add cordova-check-plugins
<% } else { -%>
npm install -g cordova-check-plugins
<% } -%>
```

Then run the following commands to perform an interactive update of outdated plugins and save the new versions:
```sh
cordova-check-plugins --update=interactive
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova plugin save
<% } else { -%>
npm run cordova -- plugin save
<% } -%>
```

### Updating platforms
```sh
<%= props.packageManager %> run cordova platform update <ios|android>
```

## Icon and splash screen

Take a look at the [Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/images.html) to know
the icon formats for each platform you want to support. The same goes for the
[splash screen](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/) images.

To avoid the "stretched" splash screen effect on Android, you can set this preference in your `config.xml`:
```xml
<preference name="SplashMaintainAspectRatio" value="true"/>
```

You can also use [9-patch images](http://developer.android.com/tools/help/draw9patch.html) to further control how your
images should be stretched.

## Using improved web views

To improve performance and/or compatibility of your app, it is possibly to customize the web view used by Cordova.
This is especially useful for devices running Android 4.3 and older, as they use a slow, outdated web view.

By default we enable Ionic WKWebView on iOS.

### Using Crosswalk on Android

> Note: [Crosswalk](https://crosswalk-project.org) is not maintained anymore, and have
> [issues](https://cordova.apache.org/announcements/2017/11/09/android-release.html) with `cordova-android` versions
> later than `6.3.0`. If you need Crosswalk to support older Android versions, stick to `cordova-android@6.3.0`.

The [Crosswalk plugin](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview) allows you to embed a
Chromium-based web view in your app instead of the Android system web view.

This allows to greatly improve compatibility and performance on systems using older or customized web views, and use
modern browser APIs, at the cost of increased app size and memory footprint.

To add or remove Crosswalk:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova plugin <add|remove> cordova-plugin-crosswalk-webview
<% } else { -%>
npm run cordova -- plugin <add|remove> cordova-plugin-crosswalk-webview
<% } -%>
```

By default, build commands will generate separate packages for x86 ad ARM architecture, to reduce download sizes.
This behavior can be change to build a single package by modifying this line in `config.xml`:
```xml
<variable name="XWALK_MULTIPLEAPK" value="true" /> <!-- Change to "false" to build single APK -->
```

### Using WKWebView on iOS

The [Ionic WebView plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview) makes use of the new `WKWebView`
instead of `UIWebView`, enabling a huge increase in JavaScript performance.

The new web view is only active on iOS 9+ (with a fallback for older version), and has some limitations (see the
plugin doc on github for more details), the biggest one being:

- **To perform any XHR request in your app,
  [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) must be enabled on your server.**

To add or remove WKWebView:
```sh
<% if (props.packageManager === 'yarn') { -%>
yarn run cordova plugin <add|remove> cordova-plugin-ionic-webview
<% } else { -%>
npm run cordova -- plugin <add|remove> cordova-plugin-ionic-webview
<% } -%>
```

## Security considerations

On a new project, external domain navigation is disabled but loading resources from any domain is enabled by default.

Although XHRs to all domains are enabled in the default whitelist configuration, it doesn't apply when using the ionic-webview cordova plugin versions 2+. Therefore, if your app is a full-stack app or it needs to access any APIs, you'll need to either be sure the CORS headers allow the origin localhost:8080, or remove the ionic-webview plugin. You can find more details about this in the [ionic webview documentation](https://beta.ionicframework.com/docs/building/webview/#cors). Note that this applies to both ios and android builds.

Before building for production, you should consider restricting domain access to improve your app security.
You can find documentation on this regard in the
[Cordova whitelist guide](https://cordova.apache.org/docs/en/latest/guide/appdev/whitelist/index.html).

To go further in security considerations, you should consider adding a
[Content Security Policy](https://github.com/apache/cordova-plugin-whitelist#content-security-policy) in your
`index.html`.

For additional general security information, you can take a look at the
[Cordova security guide](https://cordova.apache.org/docs/en/latest/guide/appdev/security/index.html)

## Development hints

### Android build behind corporate proxy with custom SSL certificate

If you use a corporate proxy that intercepts HTTPS requests with a custom certificate, you may encounter issues like
`peer not authenticated` errors. To fix this, you need to add this certificate to the Java trusted certificate store.

Make sure you have write access to your JRE (you may need `sudo` on Linux and OS X), then use the `keytool` utility to
import it:
```sh
keytool -importcert -alias <an_alias> -keystore <java_home>/jre/lib/security/cacerts -file <certificate_file>
```

The default password for the `cacerts` file is `changeit`.

On OS X >10.9, you can use this command to find your java home:
```sh
/usr/libexec/java_home
```
The `cacerts` file is then located under there in `jre/lib/security`
