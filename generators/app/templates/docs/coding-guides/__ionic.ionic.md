# Introduction to Ionic

[Ionic](http://ionicframework.com) is an UI framework initially made to create mobile hybrid applications by providing
Angular components rendering with a native look on each platform.
  
In their new version matching the Angular (2+) rewrite, they officially support web apps in addition to mobile hybrid
apps and provide iOS, Android (Material design) and Windows UI looks for the components.

## Limitations

Starting from Ionic v2, there are several limitations in the Ionic framework making it difficult to use it just like any
other Angular library.
  
The most problematic ones are due to the strong ties between the framework and its tools, see
[the next section](#why-not-using-ionic-cli-) for more details:

- Warnings are emitted on build, but they are safe to ignore:
  ```sh
  WARNING in ./~/ionic-angular/util/ng-module-loader.js
  54:11-36 Critical dependency: the request of a dependency is an expression
  ```

- [`@IonicPage`](https://ionicframework.com/docs/api/navigation/IonicPage/) annotations should **not** be used, as deep
  links generation and lazy loading is not working without Ionic CLI.
  Instead you can use the Angular router and link it with Ionic navigation using the router events.
  As for the lazy loading, you can use the more flexible 
  [lazy loading router configuration](https://angular.io/guide/router#lazy-loading-route-configuration).

Besides these limitations, Ionic still works great and is one of the best frameworks for building cross-platform mobile
hybrid apps.

### Why not using Ionic CLI ?
  
[Ionic CLI](https://github.com/ionic-team/ionic-cli) is a good way to start and build Ionic projects, but have many
limitations as for building enterprise projects with a high quality target compared to Angular CLI.
  
Here is a quick comparison:

#### Limitations with Ionic CLI

- Does not follow [Angular style guide](https://angular.io/guide/styleguide): naming, structure, modules...
- No cache busting by using hash on CSS/JavaScript filenames
- No built-in unit tests support
- No built-in end-to-end tests support
- No CSS encapsulation in components
- More difficult to do selective module lazy loading (need to mix `@IonicPage` modules and regular modules)
  
#### Limitations with Angular CLI

- No `@IonicPage` deep linking and lazy loading support (tied to Ionic CLI, see
  [this issue](https://github.com/ionic-team/ionic-app-scripts/issues/1091)).
  Instead we use the Angular router which has better predictability, tied to Ionic push navigation.
  
  In addition, the [deep links plugin](https://github.com/ionic-team/ionic-plugin-deeplinks) can still be configured to
  support mobile deep linking in addition to URL routing.
  
- Warnings are emitted on build, due to the Ionic module loader (which is not used, so it's safe to ignore).
  See these issues: 
  * https://github.com/ionic-team/ionic/issues/12285
  * https://github.com/angular/angular-cli/issues/7112
