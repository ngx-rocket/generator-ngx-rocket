## [10.1.2](https://github.com/ngx-rocket/generator-ngx-rocket/compare/10.1.1...10.1.2) (2021-12-15)


### Bug Fixes

* add missing postcss dep for yarn (fix [#618](https://github.com/ngx-rocket/generator-ngx-rocket/issues/618)) ([2d2e61a](https://github.com/ngx-rocket/generator-ngx-rocket/commit/2d2e61a42253707978065064388c364a6a203f2f))
* possible error with insights (fix [#620](https://github.com/ngx-rocket/generator-ngx-rocket/issues/620)) ([7377db4](https://github.com/ngx-rocket/generator-ngx-rocket/commit/7377db414cfb40104b9f22ad508fc80e284bd747))

## [10.1.1](https://github.com/ngx-rocket/generator-ngx-rocket/compare/10.1.0...10.1.1) (2021-12-10)

# [10.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/10.0.1...10.1.0) (2021-12-10)


### Bug Fixes

* android package copy ([bcd2328](https://github.com/ngx-rocket/generator-ngx-rocket/commit/bcd23280f6f57ffc1b2afc40f334f57c4ee69914))
* cannot update issue (fix [#607](https://github.com/ngx-rocket/generator-ngx-rocket/issues/607)) ([dd96390](https://github.com/ngx-rocket/generator-ngx-rocket/commit/dd9639009988592dd74a264102130e83aee0d7db))
* e2e/cypress templates ([1131898](https://github.com/ngx-rocket/generator-ngx-rocket/commit/1131898f3bb90a66185df014cc8f601216fd8967))
* install errors with npm 7+ (fix [#611](https://github.com/ngx-rocket/generator-ngx-rocket/issues/611)) ([1a273dd](https://github.com/ngx-rocket/generator-ngx-rocket/commit/1a273ddf9b9ca2d8e0ea39bef4c41ed63b7802e5))
* jest test config with Angular 13 ([4a427ee](https://github.com/ngx-rocket/generator-ngx-rocket/commit/4a427eeeeb14d65a907e2fe23e04146cde6c06fa))
* missing @popperjs/core peer dependency ([ba0aba5](https://github.com/ngx-rocket/generator-ngx-rocket/commit/ba0aba55d08c9a6fad03b72c1566e816b72cf4d5))
* remove deprecated cordova-plugin-whitelist ([77e1b4f](https://github.com/ngx-rocket/generator-ngx-rocket/commit/77e1b4ff20255fc0e664988356f4d022234ab8f0))
* update command in addon generator ([dd2409b](https://github.com/ngx-rocket/generator-ngx-rocket/commit/dd2409b5f65cbe1d4ca4b751a0c32797c0791105))


### Code Refactoring

* deprecate Protractor in favor of Cypress ([f5c4538](https://github.com/ngx-rocket/generator-ngx-rocket/commit/f5c4538fecfe7dca5ff37ff7e1b8f5c471f39d1f))


### Features

* add cypress for e2e test ([#605](https://github.com/ngx-rocket/generator-ngx-rocket/issues/605)) ([6fe85aa](https://github.com/ngx-rocket/generator-ngx-rocket/commit/6fe85aafce83159a90267f41586e52bf2b087dca))
* Angular 13 update ([49a3669](https://github.com/ngx-rocket/generator-ngx-rocket/commit/49a366910b87207add51f74730ca30dc9557718b))
* migrate to [@awesome-cordova-plugins](https://github.com/awesome-cordova-plugins) ([4df3fb8](https://github.com/ngx-rocket/generator-ngx-rocket/commit/4df3fb896e83d858ad0b4ff1641be09869075364))
* update cypress and add auth support for e2e test ([6f80f69](https://github.com/ngx-rocket/generator-ngx-rocket/commit/6f80f69e81b64107770dc2c12d9fc1f8a4f6cdab))
* update ionic packages ([839f629](https://github.com/ngx-rocket/generator-ngx-rocket/commit/839f629f19bc874fc7ba3b6ca4d4dc7783a1fd01))
* update karma config ([90d40e6](https://github.com/ngx-rocket/generator-ngx-rocket/commit/90d40e6f4cf05cdf606347f59dad8cd07d11b985))
* update ng-bootstrap for v13 support ([af21e28](https://github.com/ngx-rocket/generator-ngx-rocket/commit/af21e28bd04a46570977e70760a761abad78ecc2))
* update to Angular 13 ([9b3183c](https://github.com/ngx-rocket/generator-ngx-rocket/commit/9b3183c4e106cf944901e7f912fd3ba189a0cb7a))


### BREAKING CHANGES

* Cypress is now the default choice for e2e tests.

## [10.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/compare/10.0.0...10.0.1) (2021-12-01)


### Bug Fixes

* **tsconfig:** remove unsupported comment ([634b1ff](https://github.com/ngx-rocket/generator-ngx-rocket/commit/634b1ffad395aed5f28ca6643d6abb1f1cc04cca))
* **tsconfig:** trailing comma ([7847733](https://github.com/ngx-rocket/generator-ngx-rocket/commit/7847733b01018a917f454babb469437dcfd3c6ae))

# [10.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/9.2.1...10.0.0) (2021-07-22)


### Bug Fixes

* angulartics errors in strict mode ([c8c2a97](https://github.com/ngx-rocket/generator-ngx-rocket/commit/c8c2a971e5eb8adcc966b86bc1b25f117deca88c))
* bootstrap 5 styling ([982bd12](https://github.com/ngx-rocket/generator-ngx-rocket/commit/982bd12aa43e84be7bae57407e866cc1e6da7f3b))
* features prompt ([5b7edcf](https://github.com/ngx-rocket/generator-ngx-rocket/commit/5b7edcf6e735b0bf62344aee8ba6dfa5da04e59c))
* jest unit tests ([0e52d95](https://github.com/ngx-rocket/generator-ngx-rocket/commit/0e52d95f8faedefe95d89ba60a052b15407b952c))
* strict mode errors ([a67967c](https://github.com/ngx-rocket/generator-ngx-rocket/commit/a67967cf38b670abc3b55f89ca3a74a96ed9d21d))
* strict typings ([f1f1ea3](https://github.com/ngx-rocket/generator-ngx-rocket/commit/f1f1ea35c6bd6d5816a107ff1a6372687b6a6d39))


### chore

* update to lastest core ([2045838](https://github.com/ngx-rocket/generator-ngx-rocket/commit/2045838fda3ac8ef2f60ff8a62e38f7e26aae4e2))


### Features

* enable typescript strict mode by default ([a772e7d](https://github.com/ngx-rocket/generator-ngx-rocket/commit/a772e7df987069a4e710087d3017b21139bc4542))
* make e2e tests optional and restore linting ([555ffc3](https://github.com/ngx-rocket/generator-ngx-rocket/commit/555ffc359b30760b7b469375160f8b43448d84fc))
* migrate addon template ci to use github actions ([1a15bc8](https://github.com/ngx-rocket/generator-ngx-rocket/commit/1a15bc8fd5e18102702d19555cde797940083caf))
* migrate to eslint, removes htmlhint (closes [#473](https://github.com/ngx-rocket/generator-ngx-rocket/issues/473)) ([b1f7334](https://github.com/ngx-rocket/generator-ngx-rocket/commit/b1f733499db62c4c6904f7745c3b93c236dfe6d8))
* migrate to husky v7 ([ab06976](https://github.com/ngx-rocket/generator-ngx-rocket/commit/ab06976e25c507fb08744eebe6858447de7ebb4a))
* move pwa prompt to the features list ([8828d3d](https://github.com/ngx-rocket/generator-ngx-rocket/commit/8828d3d36a21f0f6e009a03f9b1cb2b41c83e161))
* regroup generator options under features prop ([d60b129](https://github.com/ngx-rocket/generator-ngx-rocket/commit/d60b129bc0e0dd2b8f1bed011d360fc4fb2fc782))
* removed [@core](https://github.com/core) module and moved services to [@shared](https://github.com/shared) ([830489b](https://github.com/ngx-rocket/generator-ngx-rocket/commit/830489bb277dfa5e8e134e235f1ee2a9b70a8825))
* update addon template ([580863f](https://github.com/ngx-rocket/generator-ngx-rocket/commit/580863f44c60324ccf586c6a112f6ed8ac0104e4))
* update polyfills ([ecf5c98](https://github.com/ngx-rocket/generator-ngx-rocket/commit/ecf5c98e4a4f1e8db2a2c8b9dd6ccc5f95ea6c1d))
* upgrade the generate app to be Angular 12 (closes [#600](https://github.com/ngx-rocket/generator-ngx-rocket/issues/600)) ([afd59bc](https://github.com/ngx-rocket/generator-ngx-rocket/commit/afd59bc8dcf34c6cfc0529a21ce2a7223bb7ddc2))


### BREAKING CHANGES

* update to lastest core, which forces yeoman-generator@5 breaking update.
* migrate to eslint, removes htmlhint
* Having a core module isn't necessary anymore as services aren't attached to modules anymore.
This follows the Angular coding guide update that only mention shared module now.
* enable typescript strict mode by default

## [9.2.1](https://github.com/ngx-rocket/generator-ngx-rocket/compare/9.2.0...9.2.1) (2021-07-20)


### Bug Fixes

* fix generator due to botched core release ([de428e5](https://github.com/ngx-rocket/generator-ngx-rocket/commit/de428e52adbbbde963c1916a744b0bfdce314ad0))

# [9.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/9.1.0...9.2.0) (2021-01-14)


### Bug Fixes

* app not loading with Electron v11 ([1444bf0](https://github.com/ngx-rocket/generator-ngx-rocket/commit/1444bf09c123619fc8ef0a0203a2ebabd51b6106))
* incorrect hads version ([ba20ff1](https://github.com/ngx-rocket/generator-ngx-rocket/commit/ba20ff18460eafd84f3f46656a215e612a62f6b1))
* rename env script to fix execution in some environments (closes [#575](https://github.com/ngx-rocket/generator-ngx-rocket/issues/575)) ([ec93fdb](https://github.com/ngx-rocket/generator-ngx-rocket/commit/ec93fdb3de5ad578bc338d41cc8a93a45a7ae422))
* update electron templates ([3433465](https://github.com/ngx-rocket/generator-ngx-rocket/commit/3433465bd204c05af5606d1c37387042b0f2f3b1))
* update generator dependencies ([bda29d9](https://github.com/ngx-rocket/generator-ngx-rocket/commit/bda29d993f25c22b3ebeb2422ad9c513628686e3))
* update jest config ([4b4a357](https://github.com/ngx-rocket/generator-ngx-rocket/commit/4b4a35740d1e12847910ca732c9e78fcca91d866))
* update packages and fix peer dependencies ([64098dc](https://github.com/ngx-rocket/generator-ngx-rocket/commit/64098dcee249a9edccb208c209b2a28bc3498faa))
* update RouteReusableStrategy for Angular 11 ([#576](https://github.com/ngx-rocket/generator-ngx-rocket/issues/576)) ([3077f5b](https://github.com/ngx-rocket/generator-ngx-rocket/commit/3077f5bc71c67f0b0f43e4a511314076580068ec))


### Features

* add brazilian portuguese language ([1a6d728](https://github.com/ngx-rocket/generator-ngx-rocket/commit/1a6d7286700b3827590c388f9e019d6a6865e523))
* enable webpack 5 ([8592a71](https://github.com/ngx-rocket/generator-ngx-rocket/commit/8592a7163f4a8f50bbf11383c50590b636d6198d))
* migrate to @ngneat/until-destroy (fix [#577](https://github.com/ngx-rocket/generator-ngx-rocket/issues/577)) ([3a77fcb](https://github.com/ngx-rocket/generator-ngx-rocket/commit/3a77fcb1cfc89f8adcf99cd4bf8c1d00ad191b7e))
* update editorconfig (fixes [#580](https://github.com/ngx-rocket/generator-ngx-rocket/issues/580)) ([9f036b3](https://github.com/ngx-rocket/generator-ngx-rocket/commit/9f036b3c1640e30f158d09198ad069bdcfc9e9b2))

# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [9.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/9.0.0...9.1.0) (2020-10-05)


### Features

* update app dependencies ([a36d906](https://github.com/ngx-rocket/generator-ngx-rocket/commit/a36d906dc20fabe69f5f81ef599a1d09816560dd))

# [9.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/8.1.1...9.0.0) (2020-09-10)


### Bug Fixes

* bump min node version to 12 ([5145294](https://github.com/ngx-rocket/generator-ngx-rocket/commit/514529432230da339ceb7822daf547b63bc124c2))
* double prompt issue (close [#566](https://github.com/ngx-rocket/generator-ngx-rocket/issues/566)) ([330b174](https://github.com/ngx-rocket/generator-ngx-rocket/commit/330b174a90dccedb87132617073699a353e740ab))
* downgrade stylelint due to pending bugs ([5faf55a](https://github.com/ngx-rocket/generator-ngx-rocket/commit/5faf55a038382d187d408444de4d4815c114164e))
* incorrect version of @types/jest ([889b147](https://github.com/ngx-rocket/generator-ngx-rocket/commit/889b1477ff9fd0d5be3f68b26295dfdd8f48a70c))
* migrate tests using async to waitForAsync ([b386534](https://github.com/ngx-rocket/generator-ngx-rocket/commit/b386534c8e19c8da599e48874f931809b7b25b14))
* remove unused modules (close [#560](https://github.com/ngx-rocket/generator-ngx-rocket/issues/560)) ([840c033](https://github.com/ngx-rocket/generator-ngx-rocket/commit/840c033d1c2d4fa55faf71e9cb2ece3ed9a82f72))
* translation strings extraction (close [#551](https://github.com/ngx-rocket/generator-ngx-rocket/issues/551)) ([cc58749](https://github.com/ngx-rocket/generator-ngx-rocket/commit/cc58749e55ea8499d8ed1f24e1f21391629ddf24))


### Features

* **deps:** update packages ([05e240a](https://github.com/ngx-rocket/generator-ngx-rocket/commit/05e240ace5154e9a52642c7f51c200c80e6be433))
* upgrade to Angular 10 ([#568](https://github.com/ngx-rocket/generator-ngx-rocket/issues/568)) ([ce64a85](https://github.com/ngx-rocket/generator-ngx-rocket/commit/ce64a85711bf774db8356b3663b13dd2e8613adf))


### BREAKING CHANGES

* Now requires Node >= 12 dues to dependencies update.

## [8.1.1](https://github.com/ngx-rocket/generator-ngx-rocket/compare/8.1.0...8.1.1) (2020-06-15)


### Bug Fixes

* remove extra translate in material template ([0f14325](https://github.com/ngx-rocket/generator-ngx-rocket/commit/0f143251039319359a6696ce9275b92c3aa4dd26))
* update ionic icon names ([b21ebd2](https://github.com/ngx-rocket/generator-ngx-rocket/commit/b21ebd2892116ec584dd6045177e653308789c5c))

# [8.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/8.0.1...8.1.0) (2020-04-23)


### Bug Fixes

* index.ts still present if auth option is not selected ([856a7fc](https://github.com/ngx-rocket/generator-ngx-rocket/commit/856a7fc86e6ccf8b58312a5e0103fc5e8830bf72))


### Features

* add spanish and italian languages ([4df356c](https://github.com/ngx-rocket/generator-ngx-rocket/commit/4df356c2326c13b6d1f8c2e22fb6fcd2fd80c6a3))

## [8.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/compare/8.0.0...8.0.1) (2020-04-02)


### Bug Fixes

* spec reporter warning ([38b6666](https://github.com/ngx-rocket/generator-ngx-rocket/commit/38b66661f1d81d8e1564724ae912b13bd5f33927))
* update angular.json config ([437ec0c](https://github.com/ngx-rocket/generator-ngx-rocket/commit/437ec0ca7d670df8ac3c0df344bac28d47769ef8)), closes [#544](https://github.com/ngx-rocket/generator-ngx-rocket/issues/544)

# [8.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/compare/7.1.0...8.0.0) (2020-03-27)


### Bug Fixes

* broken template ([68d287e](https://github.com/ngx-rocket/generator-ngx-rocket/commit/68d287e5904d3617034ed3665a945b123e9b9144))
* i18n for Electron ([15c7615](https://github.com/ngx-rocket/generator-ngx-rocket/commit/15c761559b6a2d24c03fd7eb99fbd41c959aac0c))
* i18n language imports ([0b8a1a6](https://github.com/ngx-rocket/generator-ngx-rocket/commit/0b8a1a6ebe78e12beaad5d8a713abc354836ce28))
* ionic css import ([2a4b5cd](https://github.com/ngx-rocket/generator-ngx-rocket/commit/2a4b5cdf86d0b3f6801180eee73119c9366a1235))
* jest alias and update cases for prefix ([6f84b73](https://github.com/ngx-rocket/generator-ngx-rocket/commit/6f84b739ff66a36c2268e922a29fb542f626eda9))
* languages listing on windows ([37d5656](https://github.com/ngx-rocket/generator-ngx-rocket/commit/37d56568756604402ba6b5f2f603ae7a8e0fcbd4))
* material header not showing in cordova (close [#215](https://github.com/ngx-rocket/generator-ngx-rocket/issues/215), [#511](https://github.com/ngx-rocket/generator-ngx-rocket/issues/511)) ([2b78ff0](https://github.com/ngx-rocket/generator-ngx-rocket/commit/2b78ff01facfe263e3342a5e77e8654053c2af08))
* misplaced prompt for puppeteer ([5cb4b60](https://github.com/ngx-rocket/generator-ngx-rocket/commit/5cb4b607b13786df1c650740fe2c705ba387eee8))
* missing global mock when using Jest ([#509](https://github.com/ngx-rocket/generator-ngx-rocket/issues/509)) ([32c69cf](https://github.com/ngx-rocket/generator-ngx-rocket/commit/32c69cf5f365114ec78a3974d77a06f3674c74b0))
* stylelint issue ([451b47b](https://github.com/ngx-rocket/generator-ngx-rocket/commit/451b47bc7a17b9a6fce98452e3a0c0bd70ae0abb))
* template issues ([046fd48](https://github.com/ngx-rocket/generator-ngx-rocket/commit/046fd488435b9c06f49054f2967971ec6f15bc32))
* ts error with cordova ([9ae8b51](https://github.com/ngx-rocket/generator-ngx-rocket/commit/9ae8b51ac16094885bfa48af54f4544a8adbd6e5))
* webview config for ios/android (close [#491](https://github.com/ngx-rocket/generator-ngx-rocket/issues/491)) ([79f4e49](https://github.com/ngx-rocket/generator-ngx-rocket/commit/79f4e49c2aa497ea9f25896d3694198b4adfbbe8))


### Features

* add de-DE translation ([f08f6ec](https://github.com/ngx-rocket/generator-ngx-rocket/commit/f08f6ec4d691297e434d56c85ff55937c944bf63))
* add deployment options (close [#540](https://github.com/ngx-rocket/generator-ngx-rocket/issues/540), [#327](https://github.com/ngx-rocket/generator-ngx-rocket/issues/327)) ([7602e8c](https://github.com/ngx-rocket/generator-ngx-rocket/commit/7602e8cb9c4631ae8313ead37b78754c0756599b))
* add i18n module and language selection at generation (close [#262](https://github.com/ngx-rocket/generator-ngx-rocket/issues/262)) ([383d6fb](https://github.com/ngx-rocket/generator-ngx-rocket/commit/383d6fbc90dd6ce34cf67899947d8f6e75958ba1))
* add prefix and aliasing for core/shared (close [#277](https://github.com/ngx-rocket/generator-ngx-rocket/issues/277)) ([faa1981](https://github.com/ngx-rocket/generator-ngx-rocket/commit/faa198163981aa2bc87b06718f2eac4958d76050))
* aggregate all auth related components in auth module (close [#535](https://github.com/ngx-rocket/generator-ngx-rocket/issues/535)) ([8dbadb7](https://github.com/ngx-rocket/generator-ngx-rocket/commit/8dbadb7cab6b5e29f042b6bd32ff623211e1eb3d))
* make Angular Material the default UI for web apps ([626505c](https://github.com/ngx-rocket/generator-ngx-rocket/commit/626505c3a591fe5466b7f9e947d759861d9a934b))
* remove HttpService and CacheService ([99eea62](https://github.com/ngx-rocket/generator-ngx-rocket/commit/99eea6261aace3c883b75d350edfd0f2505fcee8))
* remove usage of puppeter by default for testing (fix [#522](https://github.com/ngx-rocket/generator-ngx-rocket/issues/522)) ([b786c23](https://github.com/ngx-rocket/generator-ngx-rocket/commit/b786c233ed0c391c25d0e6fec8fd5d3768ee635c))
* update bootstrap template for ng9 ([88d3d58](https://github.com/ngx-rocket/generator-ngx-rocket/commit/88d3d58e6166ef4056badafa13dd94a70984e191))
* update de-DE translation ([3c0b244](https://github.com/ngx-rocket/generator-ngx-rocket/commit/3c0b24496bc7f2688d0f4f4d011ccdb6beeb31c9))
* update to Ionic 5 ([589a1fb](https://github.com/ngx-rocket/generator-ngx-rocket/commit/589a1fb08c4e5d81d070156c3ee4c28eb07225bd))
* upgrade to ng9 for material path ([97d8fb0](https://github.com/ngx-rocket/generator-ngx-rocket/commit/97d8fb0ab8dea49fda6ea5d1d4a8ef2151ab94f5))


### BREAKING CHANGES

* core/shared folders now have an `@` prefix to have them listed first,
along with a direct TypeScript alias for imports.
* Removing HttpClient overload as this is definitely not something
the Angular team is looking to support. Also it's not relevant and
useful anymore thanks to state management libraries, that's why
CacheService is also removed.

## [7.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/7.1.0) (2019-09-04)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/7.0.2...7.1.0)

**Fixed bugs:**

- generating electron app breaks l10n [\#500](https://github.com/ngx-rocket/generator-ngx-rocket/issues/500)
- Npm run compodoc does not work because src/tsconfig.app.json is not found [\#497](https://github.com/ngx-rocket/generator-ngx-rocket/issues/497)
- ngx new immediately aborts after splash / header intro without initiating prompts. [\#494](https://github.com/ngx-rocket/generator-ngx-rocket/issues/494)
- Fix CI E2E ionic tests flakyness [\#480](https://github.com/ngx-rocket/generator-ngx-rocket/issues/480)

**Merged pull requests:**

- Fix i18n with Electron target \(close \#500\) [\#506](https://github.com/ngx-rocket/generator-ngx-rocket/pull/506)
- Fix tsconfig path for compodoc \(close \#497\) [\#505](https://github.com/ngx-rocket/generator-ngx-rocket/pull/505)
- Autofix add-ons names from package ref [\#504](https://github.com/ngx-rocket/generator-ngx-rocket/pull/504)
- Fix crash with invalid add-ons [\#503](https://github.com/ngx-rocket/generator-ngx-rocket/pull/503)
- Bump eslint-utils from 1.3.1 to 1.4.2 [\#501](https://github.com/ngx-rocket/generator-ngx-rocket/pull/501)
- Fixed insight issue causing ngx CLI crash [\#496](https://github.com/ngx-rocket/generator-ngx-rocket/pull/496)
- Migrate to Azure Pipelines CI [\#492](https://github.com/ngx-rocket/generator-ngx-rocket/pull/492)
- Add Jest option [\#486](https://github.com/ngx-rocket/generator-ngx-rocket/pull/486)

## [7.0.2](https://github.com/ngx-rocket/generator-ngx-rocket/tree/7.0.2) (2019-07-19)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/7.0.1...7.0.2)

**Fixed bugs:**

- generate bootstrap header dropdown give page more than 100% [\#488](https://github.com/ngx-rocket/generator-ngx-rocket/issues/488)

**Closed issues:**

- favicons loaded on every route change [\#305](https://github.com/ngx-rocket/generator-ngx-rocket/issues/305)

**Merged pull requests:**

- Fix issue with bootstrap dropdown [\#490](https://github.com/ngx-rocket/generator-ngx-rocket/pull/490)

## [7.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/7.0.1) (2019-07-14)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/7.0.0...7.0.1)

## [7.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/7.0.0) (2019-07-14)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/6.2.1...7.0.0)

**Enhancements**:

- Support for Angular 8 [\#478](https://github.com/ngx-rocket/generator-ngx-rocket/issues/478) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- coding guide for configurations and environments [\#475](https://github.com/ngx-rocket/generator-ngx-rocket/issues/475) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]
- Add --debug-infos option to ngx CLI [\#377](https://github.com/ngx-rocket/generator-ngx-rocket/issues/377) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- HMR \(Hot Module Replacement\) support? [\#132](https://github.com/ngx-rocket/generator-ngx-rocket/issues/132) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
-  Add HMR support \(close \#132\) [\#482](https://github.com/ngx-rocket/generator-ngx-rocket/pull/482) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add Angular 8 support \(close \#478\) [\#481](https://github.com/ngx-rocket/generator-ngx-rocket/pull/481) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add --debug-infos flag \(close \#377\) to CLI [\#479](https://github.com/ngx-rocket/generator-ngx-rocket/pull/479) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Closed issues:**

- How to create an Angular 6 project with latest version of generator-ngx-rocket  [\#484](https://github.com/ngx-rocket/generator-ngx-rocket/issues/484)
- New created ng7-pre Project fails to compile due to directory with hashtag [\#483](https://github.com/ngx-rocket/generator-ngx-rocket/issues/483)
- Explicitly document the licence for the generated code [\#385](https://github.com/ngx-rocket/generator-ngx-rocket/issues/385)

**Merged pull requests:**

- Fix favicons being loaded on every route change [\#485](https://github.com/ngx-rocket/generator-ngx-rocket/pull/485)
- doc: build-specific configuration options \(fix \#475\) [\#476](https://github.com/ngx-rocket/generator-ngx-rocket/pull/476)

## [6.2.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/6.2.1) (2019-06-10)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/6.2.0...6.2.1)

**Fixed bugs:**

- Fix misc bugs with PWA [\#477](https://github.com/ngx-rocket/generator-ngx-rocket/pull/477)

## [6.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/6.2.0) (2019-05-27)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/6.1.0...6.2.0)

**Enhancements**:

- Misc grooming and updates [\#474](https://github.com/ngx-rocket/generator-ngx-rocket/pull/474) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Merged pull requests:**

- fix: avoid potential never-ending subscriptions for page titles [\#471](https://github.com/ngx-rocket/generator-ngx-rocket/pull/471)

## [6.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/6.1.0) (2019-05-10)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/6.0.2...6.1.0)

**Enhancements**:

- Add options for dropshipping generator [\#470](https://github.com/ngx-rocket/generator-ngx-rocket/pull/470) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add package install in root/client/server folders in full-stack mode [\#468](https://github.com/ngx-rocket/generator-ngx-rocket/pull/468) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Merged pull requests:**

- Migrate to new fontawesome package [\#469](https://github.com/ngx-rocket/generator-ngx-rocket/pull/469)

## [6.0.2](https://github.com/ngx-rocket/generator-ngx-rocket/tree/6.0.2) (2019-05-04)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/6.0.1...6.0.2)

**Fixed bugs:**

- Fix duplicate --aot param in start script [\#467](https://github.com/ngx-rocket/generator-ngx-rocket/pull/467)

**Closed issues:**

- Compilation failed during e2e because of core-js [\#465](https://github.com/ngx-rocket/generator-ngx-rocket/issues/465)

**Merged pull requests:**

- Roll back core-js version [\#466](https://github.com/ngx-rocket/generator-ngx-rocket/pull/466)

## [6.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/6.0.1) (2019-04-25)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/6.0.0...6.0.1)

**Fixed bugs:**
- Error running ngx new [\#421](https://github.com/ngx-rocket/generator-ngx-rocket/issues/421) [[bug](https://github.com/ngx-rocket/generator-ngx-rocket/labels/bug)]

## [6.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/6.0.0) (2019-04-24)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/5.3.0...6.0.0)

**Enhancements**:

- Migrate to Ionic@4 [\#302](https://github.com/ngx-rocket/generator-ngx-rocket/issues/302) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Added untilDestroyed operator to properly clean up subscriptions on component destroy [\#396](https://github.com/ngx-rocket/generator-ngx-rocket/pull/396) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Extract credentials from authentication service [\#447](https://github.com/ngx-rocket/generator-ngx-rocket/issues/447) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Allow forcing generator options from addon [\#444](https://github.com/ngx-rocket/generator-ngx-rocket/issues/444) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Migrate to Angulartics2 v7 [\#438](https://github.com/ngx-rocket/generator-ngx-rocket/issues/438) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- switch to async/await tests and turn off SELENIUM\_PROMISE\_MANAGER [\#399](https://github.com/ngx-rocket/generator-ngx-rocket/issues/399) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add optional libraries / tools choice [\#381](https://github.com/ngx-rocket/generator-ngx-rocket/issues/381) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add TypeScript strict option support [\#462](https://github.com/ngx-rocket/generator-ngx-rocket/pull/462) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add optional tools choice \(close \#381\) [\#453](https://github.com/ngx-rocket/generator-ngx-rocket/pull/453) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add optional utility libraries choice \(\#381\) [\#452](https://github.com/ngx-rocket/generator-ngx-rocket/pull/452) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Enable prettier on HTML templates [\#451](https://github.com/ngx-rocket/generator-ngx-rocket/pull/451) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Extract credentials from authentication service \(close \#447\) [\#448](https://github.com/ngx-rocket/generator-ngx-rocket/pull/448) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Allow forcing generator options from addon \(close \#444\) [\#445](https://github.com/ngx-rocket/generator-ngx-rocket/pull/445) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Update to Ionic 4 \(stable\) \(\#387, \#302\) [\#439](https://github.com/ngx-rocket/generator-ngx-rocket/pull/439) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add --strict-mode option to enable TypeScript strict mode [\#292](https://github.com/ngx-rocket/generator-ngx-rocket/issues/292) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Migrate to async/await everywhere [\#429](https://github.com/ngx-rocket/generator-ngx-rocket/issues/429) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Strict mode is broken on Ionic branch [\#291](https://github.com/ngx-rocket/generator-ngx-rocket/issues/291)

**Fixed bugs:**

- Use localStorage `setItem` and `getItem` instead of `this.storage\[cachePersistenceKey\]` [\#410](https://github.com/ngx-rocket/generator-ngx-rocket/issues/410)

**Closed issues:**

- npm start does work when app is started, but error comes as "ENOENT: no such file or directory, stat 'D:\projects\ang6\src\app\shared\loader\loader.component.ngfactory.js'" when we modify and save the any file. [\#395](https://github.com/ngx-rocket/generator-ngx-rocket/issues/395)
- Feature request: single e2e test run support [\#392](https://github.com/ngx-rocket/generator-ngx-rocket/issues/392)
- Error Circular dependency when adding either HttpClient or HttpService to AuthenticationService [\#436](https://github.com/ngx-rocket/generator-ngx-rocket/issues/436)
- consultation："ngx-scripts env npm\_package\_version" [\#412](https://github.com/ngx-rocket/generator-ngx-rocket/issues/412)
- ngx update failed in .yo-rc.json [\#406](https://github.com/ngx-rocket/generator-ngx-rocket/issues/406)
- API Prefix interceptor not used when routes are lazy loaded [\#405](https://github.com/ngx-rocket/generator-ngx-rocket/issues/405)
- Registration module  [\#203](https://github.com/ngx-rocket/generator-ngx-rocket/issues/203)

**Merged pull requests:**

- Removal of deprecated keyboard [\#393](https://github.com/ngx-rocket/generator-ngx-rocket/pull/393)
- Synced up polyfills with latest angular CLI [\#391](https://github.com/ngx-rocket/generator-ngx-rocket/pull/391)
- Added redirect to previously saved url after login, if you are not authenticated. [\#390](https://github.com/ngx-rocket/generator-ngx-rocket/pull/390)
- Leveled up e2e test example [\#383](https://github.com/ngx-rocket/generator-ngx-rocket/pull/383)
- Ionic 4 support [\#369](https://github.com/ngx-rocket/generator-ngx-rocket/pull/369)
- Inital support of electron target [\#333](https://github.com/ngx-rocket/generator-ngx-rocket/pull/333)
- Release/6.0.x [\#463](https://github.com/ngx-rocket/generator-ngx-rocket/pull/463)
- Update all dependencies and perform associated migrations [\#461](https://github.com/ngx-rocket/generator-ngx-rocket/pull/461)
- Refactor: 💡 Use async/await instead of then\(\) \(close \#429\) [\#459](https://github.com/ngx-rocket/generator-ngx-rocket/pull/459)
- Updated link to Angular docs for more relevance [\#457](https://github.com/ngx-rocket/generator-ngx-rocket/pull/457)
- Update lodash dependency to 4.7.11 [\#456](https://github.com/ngx-rocket/generator-ngx-rocket/pull/456)
- Fix CircleCI licence approval [\#450](https://github.com/ngx-rocket/generator-ngx-rocket/pull/450)
- Feature/simplify tests [\#449](https://github.com/ngx-rocket/generator-ngx-rocket/pull/449)
- Update add-on template and use xo with prettier [\#446](https://github.com/ngx-rocket/generator-ngx-rocket/pull/446)
- update ng-bootstrap version to 4.x.x [\#437](https://github.com/ngx-rocket/generator-ngx-rocket/pull/437)
- wrong `translations:extract` --sort parameter [\#435](https://github.com/ngx-rocket/generator-ngx-rocket/pull/435)
- Add missing Material modules [\#434](https://github.com/ngx-rocket/generator-ngx-rocket/pull/434)
- Update addon readme [\#430](https://github.com/ngx-rocket/generator-ngx-rocket/pull/430)
- ionic: update to rc1 and fix tabs router and selected tab [\#428](https://github.com/ngx-rocket/generator-ngx-rocket/pull/428)
- remove ionic overlay workaround and make login controller cleaner [\#427](https://github.com/ngx-rocket/generator-ngx-rocket/pull/427)
- DOC: add clarity on the purpose of npm run env and how it works [\#426](https://github.com/ngx-rocket/generator-ngx-rocket/pull/426)
- async/await e2e and disable selenium promise manager \(closes \#399\) [\#425](https://github.com/ngx-rocket/generator-ngx-rocket/pull/425)
- Update Electron implementation and adds platform choice \(close \#114 \) [\#422](https://github.com/ngx-rocket/generator-ngx-rocket/pull/422)
- Added ionic webview details for CORS-all platforms [\#419](https://github.com/ngx-rocket/generator-ngx-rocket/pull/419)
- Standard accessors for local storage \(see \#410\) [\#415](https://github.com/ngx-rocket/generator-ngx-rocket/pull/415)
- Updated ionic to beta 16 and migrated for tabs breaking changes [\#411](https://github.com/ngx-rocket/generator-ngx-rocket/pull/411)
- Merge master onto 6.0.x branch \(Angular 7 update\) [\#403](https://github.com/ngx-rocket/generator-ngx-rocket/pull/403)
- Unit test fixes, cosmetics and dependencies bump [\#397](https://github.com/ngx-rocket/generator-ngx-rocket/pull/397)

## [5.3.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/5.3.0) (2018-10-29)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/5.2.0...5.3.0)

**Enhancements**:

- Contribution: Redirect to previously saved url after login, if you are not authenticated. [\#388](https://github.com/ngx-rocket/generator-ngx-rocket/issues/388) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Updated tslint rules, polyfills and some fixes [\#402](https://github.com/ngx-rocket/generator-ngx-rocket/pull/402) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Migrated generator code base to xo + prettier and async/await [\#401](https://github.com/ngx-rocket/generator-ngx-rocket/pull/401) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Update to Angular 7 [\#398](https://github.com/ngx-rocket/generator-ngx-rocket/pull/398) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

## [5.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/5.2.0) (2018-09-25)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/5.1.0...5.2.0)

**Enhancements**:

- Infinite loop when moving `AppRoutingModule` before `LoginModule ` in `imports` in `AppModule` [\#384](https://github.com/ngx-rocket/generator-ngx-rocket/issues/384) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]
- Prettier support [\#303](https://github.com/ngx-rocket/generator-ngx-rocket/issues/303) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
-  Added prettier support \(closes \#303\) and init git repo by default [\#380](https://github.com/ngx-rocket/generator-ngx-rocket/pull/380) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Added Angular update guide and updated maintainers doc [\#379](https://github.com/ngx-rocket/generator-ngx-rocket/pull/379) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]

**Fixed bugs:**

- npm start gets dependency failure. Flexbox with rxjs [\#376](https://github.com/ngx-rocket/generator-ngx-rocket/issues/376)
- Skip checksum checking for Chrome install on Appveyor to fix CI [\#382](https://github.com/ngx-rocket/generator-ngx-rocket/pull/382)

**Closed issues:**

- Cannot run cordova build  [\#363](https://github.com/ngx-rocket/generator-ngx-rocket/issues/363)
- Auth guard triggering only once in lazy loaded modules [\#312](https://github.com/ngx-rocket/generator-ngx-rocket/issues/312)

**Merged pull requests:**

- Commented the importance of module import order [\#386](https://github.com/ngx-rocket/generator-ngx-rocket/pull/386)
- Updated dependencies and fixed translations imports with angular/cli@6.2 [\#378](https://github.com/ngx-rocket/generator-ngx-rocket/pull/378)

## [5.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/5.1.0) (2018-09-10)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/5.0.1...5.1.0)

**Enhancements**:

- ApiPrefixInterceptor - avoid to change URL if it starts with http/https [\#338](https://github.com/ngx-rocket/generator-ngx-rocket/issues/338) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add responsive tabs ionic template [\#106](https://github.com/ngx-rocket/generator-ngx-rocket/issues/106) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add CircleCI config to build Cordova/Android paths [\#364](https://github.com/ngx-rocket/generator-ngx-rocket/pull/364) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add ionic tabs after shell integration as component [\#361](https://github.com/ngx-rocket/generator-ngx-rocket/pull/361) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Updated angular guide with a FAQ section and added NGXS references [\#357](https://github.com/ngx-rocket/generator-ngx-rocket/pull/357) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]
- Added fuzzy matching to ngx \<script\> command [\#346](https://github.com/ngx-rocket/generator-ngx-rocket/pull/346) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Ionic / Cordova build is broken on current master [\#372](https://github.com/ngx-rocket/generator-ngx-rocket/issues/372)
- wdm: Failed to compile on new project [\#352](https://github.com/ngx-rocket/generator-ngx-rocket/issues/352)
- Update \_index.html, fix cordova routing bug [\#365](https://github.com/ngx-rocket/generator-ngx-rocket/pull/365)

**Closed issues:**

- App failed to compile upon save [\#367](https://github.com/ngx-rocket/generator-ngx-rocket/issues/367)
- ERROR in ./src/app/app.module.ngfactory.js [\#366](https://github.com/ngx-rocket/generator-ngx-rocket/issues/366)
- \[Feature request\] Add option for non-flex UI  [\#360](https://github.com/ngx-rocket/generator-ngx-rocket/issues/360)
-  Can't resolve '@angular/router.ngfactory [\#359](https://github.com/ngx-rocket/generator-ngx-rocket/issues/359)
- Change AuthGuard Route [\#348](https://github.com/ngx-rocket/generator-ngx-rocket/issues/348)
- Angular Ionic module lazy load problem [\#342](https://github.com/ngx-rocket/generator-ngx-rocket/issues/342)
- Data path ".baseHref" should be string. [\#336](https://github.com/ngx-rocket/generator-ngx-rocket/issues/336)
- Redundancy in route [\#204](https://github.com/ngx-rocket/generator-ngx-rocket/issues/204)

**Merged pull requests:**

- Disable ng serve AOT for Ionic \(\#372\) [\#375](https://github.com/ngx-rocket/generator-ngx-rocket/pull/375)
- Fixed Ionic/Cordova build \(closes \#372\) [\#374](https://github.com/ngx-rocket/generator-ngx-rocket/pull/374)
- Updated ngx-scripts and docs [\#373](https://github.com/ngx-rocket/generator-ngx-rocket/pull/373)
- Fix typo in i18n docs [\#368](https://github.com/ngx-rocket/generator-ngx-rocket/pull/368)
- Updated dependencies and fixed npm vulnerabilities warnings [\#354](https://github.com/ngx-rocket/generator-ngx-rocket/pull/354)
- Extract shell into a new module [\#351](https://github.com/ngx-rocket/generator-ngx-rocket/pull/351)
- Avoid interception of full-path specified urls [\#339](https://github.com/ngx-rocket/generator-ngx-rocket/pull/339)

## [5.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/5.0.1) (2018-06-11)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/5.0.0...5.0.1)

**Fixed bugs:**

- fix json format for manifest file [\#332](https://github.com/ngx-rocket/generator-ngx-rocket/pull/332)

## [5.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/5.0.0) (2018-05-17)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/4.2.0...5.0.0)

**Enhancements**:

- Angular 6 support [\#301](https://github.com/ngx-rocket/generator-ngx-rocket/issues/301) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Make api prefix interceptor optional [\#300](https://github.com/ngx-rocket/generator-ngx-rocket/issues/300) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- BREAKING CHANGE: Angular 6 support [\#323](https://github.com/ngx-rocket/generator-ngx-rocket/pull/323) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Added method to disable api prefix on an http request \(closes \#300\) [\#310](https://github.com/ngx-rocket/generator-ngx-rocket/pull/310) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Merged pull requests:**

- Update README.md with webpack links [\#306](https://github.com/ngx-rocket/generator-ngx-rocket/pull/306)
- Publish to gh-pages \#278 - Service Workers relative path [\#289](https://github.com/ngx-rocket/generator-ngx-rocket/pull/289)

## [4.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/4.2.0) (2018-03-30)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/4.1.0...4.2.0)

**Enhancements**:

- Add server and fullstack option to addon generator [\#281](https://github.com/ngx-rocket/generator-ngx-rocket/issues/281) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Closed issues:**

- Replace material-design-icons package [\#298](https://github.com/ngx-rocket/generator-ngx-rocket/issues/298)

**Merged pull requests:**

- Add support for analytics with Angulartics2. [\#294](https://github.com/ngx-rocket/generator-ngx-rocket/pull/294)
- Chore/fix appveyor [\#293](https://github.com/ngx-rocket/generator-ngx-rocket/pull/293)
- Feature/addon fullstack [\#290](https://github.com/ngx-rocket/generator-ngx-rocket/pull/290)
- Updated license. [\#288](https://github.com/ngx-rocket/generator-ngx-rocket/pull/288)
- Fix checkbox list display in issue template [\#286](https://github.com/ngx-rocket/generator-ngx-rocket/pull/286)
- Remove NodeJS 7 from travis CI target [\#285](https://github.com/ngx-rocket/generator-ngx-rocket/pull/285)
- Add version number in dev env [\#271](https://github.com/ngx-rocket/generator-ngx-rocket/pull/271)

## [4.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/4.1.0) (2018-03-22)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/4.0.0...4.1.0)

**Enhancements**:

- Facilitate backend integration in addons [\#272](https://github.com/ngx-rocket/generator-ngx-rocket/issues/272) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Closed issues:**

- https://stackblitz.com/github/ngx-rocket/starter-kit not working [\#280](https://github.com/ngx-rocket/generator-ngx-rocket/issues/280)
- help to request response error and in pass in success always [\#279](https://github.com/ngx-rocket/generator-ngx-rocket/issues/279)
- Three \(3\) packages missing when running starter kit using StackBlitz [\#276](https://github.com/ngx-rocket/generator-ngx-rocket/issues/276)
- HttpClient failed in Service providers [\#274](https://github.com/ngx-rocket/generator-ngx-rocket/issues/274)
- --raw option is not working [\#267](https://github.com/ngx-rocket/generator-ngx-rocket/issues/267)

**Merged pull requests:**

- Chore/update deps [\#284](https://github.com/ngx-rocket/generator-ngx-rocket/pull/284)
- Feature/fullstack [\#282](https://github.com/ngx-rocket/generator-ngx-rocket/pull/282)
- \* \[bug\] the raw ui option can not work [\#275](https://github.com/ngx-rocket/generator-ngx-rocket/pull/275)
- Added doc & tests for location strategy option [\#273](https://github.com/ngx-rocket/generator-ngx-rocket/pull/273)
- Add minimalist circleci config [\#270](https://github.com/ngx-rocket/generator-ngx-rocket/pull/270)
- + \[feat\] add the location strategy option [\#265](https://github.com/ngx-rocket/generator-ngx-rocket/pull/265)

## [4.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/4.0.0) (2018-03-02)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/3.2.1...4.0.0)

**Enhancements**:

- Hard to make a new component fill the rest of body [\#266](https://github.com/ngx-rocket/generator-ngx-rocket/issues/266) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Serve app with service worker enabled [\#250](https://github.com/ngx-rocket/generator-ngx-rocket/issues/250) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add autofill attributes to login form [\#228](https://github.com/ngx-rocket/generator-ngx-rocket/issues/228) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Implement lazy loading  [\#195](https://github.com/ngx-rocket/generator-ngx-rocket/issues/195) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add an option to generate template without any UI library [\#150](https://github.com/ngx-rocket/generator-ngx-rocket/issues/150) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Allow to only generate the toolchain [\#144](https://github.com/ngx-rocket/generator-ngx-rocket/issues/144) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Switch to new HttpClient API [\#94](https://github.com/ngx-rocket/generator-ngx-rocket/issues/94) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Feature/tools only [\#263](https://github.com/ngx-rocket/generator-ngx-rocket/pull/263) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Added script to serve app with service worker \(closes \#250\) [\#251](https://github.com/ngx-rocket/generator-ngx-rocket/pull/251) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Feature/no ui library [\#246](https://github.com/ngx-rocket/generator-ngx-rocket/pull/246) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Feature/Strict mode compatibility [\#242](https://github.com/ngx-rocket/generator-ngx-rocket/pull/242) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Update angular style guide links [\#240](https://github.com/ngx-rocket/generator-ngx-rocket/pull/240) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]
- Updated tooling [\#238](https://github.com/ngx-rocket/generator-ngx-rocket/pull/238) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- BREAKING CHANGE: Switch to new HttpClient API \(closes \#94\) [\#237](https://github.com/ngx-rocket/generator-ngx-rocket/pull/237) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Feature/autocomplete [\#235](https://github.com/ngx-rocket/generator-ngx-rocket/pull/235) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- BREAKING CHANGE: Added lazy loading option \(closes \#195\) [\#229](https://github.com/ngx-rocket/generator-ngx-rocket/pull/229) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Unable to create new project or use any of the ngx commands  [\#264](https://github.com/ngx-rocket/generator-ngx-rocket/issues/264)
- Ionic template SPA server not working properly [\#249](https://github.com/ngx-rocket/generator-ngx-rocket/issues/249)
- HttpCacheService.loadCacheData\(\) [\#244](https://github.com/ngx-rocket/generator-ngx-rocket/issues/244)
- MatTableModule is missing in MaterialModule [\#236](https://github.com/ngx-rocket/generator-ngx-rocket/issues/236)
- Fixed material side-menu closing when navigating in desktop mode [\#254](https://github.com/ngx-rocket/generator-ngx-rocket/pull/254)
- ionic: invalid view to insert when route to lazy loading page [\#241](https://github.com/ngx-rocket/generator-ngx-rocket/pull/241)
- Fixed missing material module imports \(fixes \#236\) [\#239](https://github.com/ngx-rocket/generator-ngx-rocket/pull/239)
- Bugfix/material simple [\#234](https://github.com/ngx-rocket/generator-ngx-rocket/pull/234)

**Closed issues:**

- ionic project crashing after npm install \(TypeError: Cannot read property 'glob' of null\) [\#255](https://github.com/ngx-rocket/generator-ngx-rocket/issues/255)
- Implement ngx-bootstrap [\#232](https://github.com/ngx-rocket/generator-ngx-rocket/issues/232)

**Merged pull requests:**

- Updated dependencies [\#269](https://github.com/ngx-rocket/generator-ngx-rocket/pull/269)
- Doc/maintainers [\#258](https://github.com/ngx-rocket/generator-ngx-rocket/pull/258)
- Update to FontAwesome 5 [\#256](https://github.com/ngx-rocket/generator-ngx-rocket/pull/256)
- Use \<base href="/"\> with override for Cordova projects \(fixes \#249\) [\#253](https://github.com/ngx-rocket/generator-ngx-rocket/pull/253)
- Added missing tests in CI [\#252](https://github.com/ngx-rocket/generator-ngx-rocket/pull/252)
- Create \_de-DE.json [\#248](https://github.com/ngx-rocket/generator-ngx-rocket/pull/248)
- Chore/update dependencies [\#247](https://github.com/ngx-rocket/generator-ngx-rocket/pull/247)
- Feature/tests lazy [\#245](https://github.com/ngx-rocket/generator-ngx-rocket/pull/245)
- Fixed Ionic ErrorHandler import and some spacing [\#243](https://github.com/ngx-rocket/generator-ngx-rocket/pull/243)
- Chore/update libs [\#233](https://github.com/ngx-rocket/generator-ngx-rocket/pull/233)

## [3.2.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/3.2.1) (2018-01-24)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/3.2.0...3.2.1)

**Fixed bugs:**

- Ngx update detect app as add-on [\#226](https://github.com/ngx-rocket/generator-ngx-rocket/issues/226)

**Merged pull requests:**

- Fixed project type detection \(fixes \#226\) [\#227](https://github.com/ngx-rocket/generator-ngx-rocket/pull/227)

## [3.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/3.2.0) (2018-01-23)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/3.1.1...3.2.0)

**Enhancements**:

- Update PWA target to @angular/service-worker@5 [\#168](https://github.com/ngx-rocket/generator-ngx-rocket/issues/168) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add path alias and module re-exports [\#159](https://github.com/ngx-rocket/generator-ngx-rocket/issues/159) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Chore/cordova update [\#223](https://github.com/ngx-rocket/generator-ngx-rocket/pull/223) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Can't scroll on iOS [\#217](https://github.com/ngx-rocket/generator-ngx-rocket/issues/217)
- Angular material template does not work on production build [\#205](https://github.com/ngx-rocket/generator-ngx-rocket/issues/205)

**Closed issues:**

- Update to Bootstrap 4 final [\#220](https://github.com/ngx-rocket/generator-ngx-rocket/issues/220)
- New Android Mobile App Error when install jquery [\#219](https://github.com/ngx-rocket/generator-ngx-rocket/issues/219)
- Update to Angular@5.2 [\#218](https://github.com/ngx-rocket/generator-ngx-rocket/issues/218)
- Update to cordova@8 [\#212](https://github.com/ngx-rocket/generator-ngx-rocket/issues/212)
-  NG Live Development Server LocalIP [\#210](https://github.com/ngx-rocket/generator-ngx-rocket/issues/210)
- Heroku deployment fails :\( [\#209](https://github.com/ngx-rocket/generator-ngx-rocket/issues/209)
- Update to bootstrap 4 beta 3 [\#208](https://github.com/ngx-rocket/generator-ngx-rocket/issues/208)
- @angular/http is deprecated  change to @angular/common/http instead [\#207](https://github.com/ngx-rocket/generator-ngx-rocket/issues/207)
- Can't implement routing correctly with a new component [\#206](https://github.com/ngx-rocket/generator-ngx-rocket/issues/206)
- Update to Angular CLI 1.6 and TypeScript 2.5 [\#200](https://github.com/ngx-rocket/generator-ngx-rocket/issues/200)
- Update to @angular/material 5.0.0 [\#199](https://github.com/ngx-rocket/generator-ngx-rocket/issues/199)
- Problem with Angular 4 Routes and Ionic UI [\#193](https://github.com/ngx-rocket/generator-ngx-rocket/issues/193)
- npm run build is failing [\#188](https://github.com/ngx-rocket/generator-ngx-rocket/issues/188)

**Merged pull requests:**

- Chore/dependencies update [\#224](https://github.com/ngx-rocket/generator-ngx-rocket/pull/224)
- Removed extra console.log from CLI [\#214](https://github.com/ngx-rocket/generator-ngx-rocket/pull/214)
- Update to Bootstrap 4 beta 3 [\#213](https://github.com/ngx-rocket/generator-ngx-rocket/pull/213)
- Add path alias and module re-exports [\#211](https://github.com/ngx-rocket/generator-ngx-rocket/pull/211)
- Update to @angular/service-worker@5 [\#202](https://github.com/ngx-rocket/generator-ngx-rocket/pull/202)
- Update to Angular 5.1 / CLI 1.6 / Material 5 \(and others\) [\#201](https://github.com/ngx-rocket/generator-ngx-rocket/pull/201)

## [3.1.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/3.1.1) (2017-12-05)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/3.1.0...3.1.1)

**Fixed bugs:**

- Error installing the generator [\#198](https://github.com/ngx-rocket/generator-ngx-rocket/issues/198)

## [3.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/3.1.0) (2017-12-04)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/3.0.1...3.1.0)

**Enhancements**:

- Merge CLI repo in main generator repo [\#184](https://github.com/ngx-rocket/generator-ngx-rocket/issues/184) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Merged pull requests:**

- Feature/merge cli [\#197](https://github.com/ngx-rocket/generator-ngx-rocket/pull/197)

## [3.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/3.0.1) (2017-12-04)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/3.0.0...3.0.1)

**Enhancements**:

- Merge addon generator as a subgenerator of ngx-rocket [\#176](https://github.com/ngx-rocket/generator-ngx-rocket/issues/176) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Error creating new project [\#194](https://github.com/ngx-rocket/generator-ngx-rocket/issues/194)

**Merged pull requests:**

- Bugfix/rxjs dependency [\#196](https://github.com/ngx-rocket/generator-ngx-rocket/pull/196)

## [3.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/3.0.0) (2017-11-28)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.4.0...3.0.0)

**Enhancements**:

- Best way to upgrade/update templated project [\#175](https://github.com/ngx-rocket/generator-ngx-rocket/issues/175) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]
- Add option flag to allow using existing Chrome install instead of puppeteer [\#171](https://github.com/ngx-rocket/generator-ngx-rocket/issues/171) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Not compatible with tsconfig strict: true [\#163](https://github.com/ngx-rocket/generator-ngx-rocket/issues/163) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add side menu / simple header choice for material UI [\#157](https://github.com/ngx-rocket/generator-ngx-rocket/issues/157) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add yarn option instead of npm [\#49](https://github.com/ngx-rocket/generator-ngx-rocket/issues/49) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Android platform restoration fails on Windows [\#121](https://github.com/ngx-rocket/generator-ngx-rocket/issues/121)
- Multiple ShellComponent instance [\#109](https://github.com/ngx-rocket/generator-ngx-rocket/issues/109)

**Closed issues:**

- Translations broken in latest build [\#181](https://github.com/ngx-rocket/generator-ngx-rocket/issues/181)
- BREAKING CHANGE: Remove Crosswalk / enhanced webviews questions and Update cordova/plugins [\#180](https://github.com/ngx-rocket/generator-ngx-rocket/issues/180)
- Update to @angular/material RC [\#177](https://github.com/ngx-rocket/generator-ngx-rocket/issues/177)

**Merged pull requests:**

- Chore/update dependencies [\#192](https://github.com/ngx-rocket/generator-ngx-rocket/pull/192)
- Feature/external chrome doc [\#191](https://github.com/ngx-rocket/generator-ngx-rocket/pull/191)
- Added custom route reuse strategy [\#190](https://github.com/ngx-rocket/generator-ngx-rocket/pull/190)
- Feature/material simple header [\#189](https://github.com/ngx-rocket/generator-ngx-rocket/pull/189)
- Feature/merge addon generator [\#185](https://github.com/ngx-rocket/generator-ngx-rocket/pull/185)
- Feature/cordova-updates [\#183](https://github.com/ngx-rocket/generator-ngx-rocket/pull/183)
- Enable tsconfig strict mode and fix linked warnings [\#182](https://github.com/ngx-rocket/generator-ngx-rocket/pull/182)
- Update Angular Material to 5.0.0-rc0 [\#179](https://github.com/ngx-rocket/generator-ngx-rocket/pull/179)
- Feature/yarn [\#178](https://github.com/ngx-rocket/generator-ngx-rocket/pull/178)
- Added option flag to allow using existing Chrome install [\#173](https://github.com/ngx-rocket/generator-ngx-rocket/pull/173)

## [2.4.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.4.0) (2017-11-13)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.3.1...2.4.0)

**Enhancements**:

- Update to RxJS 5.5 lettable operators [\#167](https://github.com/ngx-rocket/generator-ngx-rocket/issues/167) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Update to Angular 5 [\#164](https://github.com/ngx-rocket/generator-ngx-rocket/issues/164) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Merged pull requests:**

- Updated to RxJS@5.5 lettable operators [\#174](https://github.com/ngx-rocket/generator-ngx-rocket/pull/174)
- Feature/angular5 [\#172](https://github.com/ngx-rocket/generator-ngx-rocket/pull/172)
- Updated to latest Bootstrap beta [\#170](https://github.com/ngx-rocket/generator-ngx-rocket/pull/170)

## [2.3.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.3.1) (2017-11-06)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.3.0...2.3.1)

**Fixed bugs:**

- Translation dropdown doesn't do anything [\#165](https://github.com/ngx-rocket/generator-ngx-rocket/issues/165)

**Merged pull requests:**

- Fixed JSON imports with angular-cli@1.5 \(fix \#165\) [\#166](https://github.com/ngx-rocket/generator-ngx-rocket/pull/166)

## [2.3.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.3.0) (2017-10-25)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.2.1...2.3.0)

**Enhancements**:

- Use chrome headless instead of phantomjs for unit tests [\#128](https://github.com/ngx-rocket/generator-ngx-rocket/issues/128) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add angular-material UI choice [\#124](https://github.com/ngx-rocket/generator-ngx-rocket/issues/124) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Feature/material [\#158](https://github.com/ngx-rocket/generator-ngx-rocket/pull/158) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add angular-material UI choice [\#155](https://github.com/ngx-rocket/generator-ngx-rocket/pull/155) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Closed issues:**

- Update shadow-piercing selectors [\#152](https://github.com/ngx-rocket/generator-ngx-rocket/issues/152)

**Merged pull requests:**

- Feature/update [\#161](https://github.com/ngx-rocket/generator-ngx-rocket/pull/161)
- Updated deep selector \(closes \#152\) [\#153](https://github.com/ngx-rocket/generator-ngx-rocket/pull/153)
- use ChromeHeadless instead of PhantomJS [\#151](https://github.com/ngx-rocket/generator-ngx-rocket/pull/151)

## [2.2.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.2.1) (2017-10-09)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.2.0...2.2.1)

**Fixed bugs:**

- Typescript mismatch warning on build [\#145](https://github.com/ngx-rocket/generator-ngx-rocket/issues/145)

**Closed issues:**

- Route not created - generate component [\#142](https://github.com/ngx-rocket/generator-ngx-rocket/issues/142)
- npm run generate -- component Throwing error [\#140](https://github.com/ngx-rocket/generator-ngx-rocket/issues/140)

**Merged pull requests:**

- Fix CONTRIBUTING documentation [\#149](https://github.com/ngx-rocket/generator-ngx-rocket/pull/149)
- Fixed typescript mismatch warning \(closes \#145\) [\#146](https://github.com/ngx-rocket/generator-ngx-rocket/pull/146)
- fix: link to what's in the box [\#143](https://github.com/ngx-rocket/generator-ngx-rocket/pull/143)

## [2.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.2.0) (2017-09-26)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.1.3...2.2.0)

**Enhancements**:

- Add service worker/PWA compatibility [\#93](https://github.com/ngx-rocket/generator-ngx-rocket/issues/93) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Error building Cordova App [\#137](https://github.com/ngx-rocket/generator-ngx-rocket/issues/137)

**Closed issues:**

- AOT support? [\#131](https://github.com/ngx-rocket/generator-ngx-rocket/issues/131)
- Add CI tests on windows environment [\#99](https://github.com/ngx-rocket/generator-ngx-rocket/issues/99)

**Merged pull requests:**

- Feature/appveyor [\#141](https://github.com/ngx-rocket/generator-ngx-rocket/pull/141)
- Bugfix/misc [\#139](https://github.com/ngx-rocket/generator-ngx-rocket/pull/139)
- Added AOT mention for production build docs \(closes \#131\) [\#138](https://github.com/ngx-rocket/generator-ngx-rocket/pull/138)
- Add support to generate PWA solution [\#126](https://github.com/ngx-rocket/generator-ngx-rocket/pull/126)

## [2.1.3](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.1.3) (2017-09-19)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.1.2...2.1.3)

**Merged pull requests:**

- Export currently used addons, removed extra newline at end [\#134](https://github.com/ngx-rocket/generator-ngx-rocket/pull/134)

## [2.1.2](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.1.2) (2017-09-18)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.1.1...2.1.2)

## [2.1.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.1.1) (2017-09-18)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.1.0...2.1.1)

**Merged pull requests:**

- Renamed .gitignore to avoid npmignore [\#133](https://github.com/ngx-rocket/generator-ngx-rocket/pull/133)

## [2.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.1.0) (2017-09-18)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/2.0.0...2.1.0)

**Enhancements**:

- npm/yarn pass-through commands [\#97](https://github.com/ngx-rocket/generator-ngx-rocket/issues/97) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- More precision on limitations [\#118](https://github.com/ngx-rocket/generator-ngx-rocket/pull/118) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]

**Fixed bugs:**

- The "npm run cordova: xxx" commands do not seem to work. [\#117](https://github.com/ngx-rocket/generator-ngx-rocket/issues/117)

**Closed issues:**

- Update base template from @angular/cli 1.4 [\#127](https://github.com/ngx-rocket/generator-ngx-rocket/issues/127)
- Update to bootstrap 4 beta [\#119](https://github.com/ngx-rocket/generator-ngx-rocket/issues/119)

**Merged pull requests:**

- Feature/update [\#130](https://github.com/ngx-rocket/generator-ngx-rocket/pull/130)
- Updated Angular intro [\#129](https://github.com/ngx-rocket/generator-ngx-rocket/pull/129)
- Feature/bootstrap@4.0.0 beta [\#120](https://github.com/ngx-rocket/generator-ngx-rocket/pull/120)

## [2.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/2.0.0) (2017-08-03)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.3.3...2.0.0)

**Enhancements**:

- Add note on Ionic limitations with Angular CLI [\#111](https://github.com/ngx-rocket/generator-ngx-rocket/issues/111) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]
- Add support for multiple targets [\#105](https://github.com/ngx-rocket/generator-ngx-rocket/issues/105) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Use browser default language as default [\#103](https://github.com/ngx-rocket/generator-ngx-rocket/issues/103) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add update check and notification [\#96](https://github.com/ngx-rocket/generator-ngx-rocket/issues/96) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add addon generator in CLI [\#91](https://github.com/ngx-rocket/generator-ngx-rocket/issues/91) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add documentation for Cordova usage [\#79](https://github.com/ngx-rocket/generator-ngx-rocket/issues/79) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add mobile cordova platform choice [\#78](https://github.com/ngx-rocket/generator-ngx-rocket/issues/78) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add WKWebView and Crosswalk support for mobile [\#77](https://github.com/ngx-rocket/generator-ngx-rocket/issues/77) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add/improve npm scripts for mobile [\#76](https://github.com/ngx-rocket/generator-ngx-rocket/issues/76) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add recommended cordova plugins to mobile template [\#75](https://github.com/ngx-rocket/generator-ngx-rocket/issues/75) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add automatic language detection on mobile app startup [\#74](https://github.com/ngx-rocket/generator-ngx-rocket/issues/74) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add ionic authentication templates and navigation guard [\#73](https://github.com/ngx-rocket/generator-ngx-rocket/issues/73) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add the mobile specific app configuration and base templates [\#72](https://github.com/ngx-rocket/generator-ngx-rocket/issues/72) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- HTML minification \(angular-cli addon\) [\#41](https://github.com/ngx-rocket/generator-ngx-rocket/issues/41) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Port mobile template to NG2 [\#5](https://github.com/ngx-rocket/generator-ngx-rocket/issues/5) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- NgbModule.forRoot\(\) used in feature module [\#112](https://github.com/ngx-rocket/generator-ngx-rocket/issues/112)
- Add-ons modules do not inherit parent generator options [\#104](https://github.com/ngx-rocket/generator-ngx-rocket/issues/104)
- Prevent back navigation on login/logout [\#102](https://github.com/ngx-rocket/generator-ngx-rocket/issues/102)
- Translations files are copied to dist folder [\#101](https://github.com/ngx-rocket/generator-ngx-rocket/issues/101)
- Type 'Observable\<{} | Response\>' is not assignable to type 'Observable\<Response\>'. [\#95](https://github.com/ngx-rocket/generator-ngx-rocket/issues/95)

**Closed issues:**

- Update to latest angular-cli and TypeScript 2.4 [\#115](https://github.com/ngx-rocket/generator-ngx-rocket/issues/115)
- Add code of conduct and issue template [\#107](https://github.com/ngx-rocket/generator-ngx-rocket/issues/107)
- File to import not found or unreadable [\#100](https://github.com/ngx-rocket/generator-ngx-rocket/issues/100)

**Merged pull requests:**

- Feature/update [\#116](https://github.com/ngx-rocket/generator-ngx-rocket/pull/116)
- Added cordova/mobile template + bugfixes [\#113](https://github.com/ngx-rocket/generator-ngx-rocket/pull/113)
- Added code of conduct and issue template \(closes \#107\) [\#110](https://github.com/ngx-rocket/generator-ngx-rocket/pull/110)

## [1.3.3](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.3.3) (2017-06-30)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.3.2...1.3.3)

**Enhancements**:

- CLI and composition with other possible addons generators [\#33](https://github.com/ngx-rocket/generator-ngx-rocket/issues/33) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Merged pull requests:**

- Feature/update [\#92](https://github.com/ngx-rocket/generator-ngx-rocket/pull/92)

## [1.3.2](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.3.2) (2017-06-23)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.3.1...1.3.2)

**Enhancements**:

- Cannot extract translated strings from variables [\#39](https://github.com/ngx-rocket/generator-ngx-rocket/issues/39) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Upgraded ngx-translate-extract and added markers \(closes \#39\) [\#88](https://github.com/ngx-rocket/generator-ngx-rocket/pull/88) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Build broken [\#84](https://github.com/ngx-rocket/generator-ngx-rocket/issues/84)

**Closed issues:**

- Upgrade dependencies and angular-cli files [\#86](https://github.com/ngx-rocket/generator-ngx-rocket/issues/86)

**Merged pull requests:**

- Updated node versions [\#89](https://github.com/ngx-rocket/generator-ngx-rocket/pull/89)
- Upgraded angular-cli files and dependencies \(close \#86\) [\#87](https://github.com/ngx-rocket/generator-ngx-rocket/pull/87)
- Fixed duplicate typings \(fix \#84\) [\#85](https://github.com/ngx-rocket/generator-ngx-rocket/pull/85)

## [1.3.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.3.1) (2017-05-29)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.3.0...1.3.1)

**Enhancements**:

- Contributing [\#52](https://github.com/ngx-rocket/generator-ngx-rocket/issues/52) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]

**Fixed bugs:**

- Something wrong on Logger service [\#80](https://github.com/ngx-rocket/generator-ngx-rocket/issues/80)

**Closed issues:**

- Publish new npm package [\#66](https://github.com/ngx-rocket/generator-ngx-rocket/issues/66)

**Merged pull requests:**

- Fixed issue with logger \(fix \#80\) [\#81](https://github.com/ngx-rocket/generator-ngx-rocket/pull/81)
- Feature/contributing [\#70](https://github.com/ngx-rocket/generator-ngx-rocket/pull/70)

## [1.3.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.3.0) (2017-05-16)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.2.2...1.3.0)

**Closed issues:**

- New home and renaming the project [\#65](https://github.com/ngx-rocket/generator-ngx-rocket/issues/65)

**Merged pull requests:**

- Feature/rocket [\#69](https://github.com/ngx-rocket/generator-ngx-rocket/pull/69)
- Feature/addon compose [\#68](https://github.com/ngx-rocket/generator-ngx-rocket/pull/68)
- Feature/extract core [\#67](https://github.com/ngx-rocket/generator-ngx-rocket/pull/67)

## [1.2.2](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.2.2) (2017-05-12)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.2.1...1.2.2)

**Closed issues:**

- The \<template\> element is deprecated [\#58](https://github.com/ngx-rocket/generator-ngx-rocket/issues/58)

**Merged pull requests:**

- Updated ng-bootstrap minimum dependency to fix \#58 [\#64](https://github.com/ngx-rocket/generator-ngx-rocket/pull/64)

## [1.2.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.2.1) (2017-05-04)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.2.0...1.2.1)

**Fixed bugs:**

- htmlhint fails to find its config on Windows [\#62](https://github.com/ngx-rocket/generator-ngx-rocket/issues/62)

**Closed issues:**

- Uncaught \(in promise\): Error: No provider for ConnectionBackend! [\#60](https://github.com/ngx-rocket/generator-ngx-rocket/issues/60)
- Is it just me or is URLSearchParams\(\) being ignored by the HttpService? [\#59](https://github.com/ngx-rocket/generator-ngx-rocket/issues/59)

## [1.2.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.2.0) (2017-03-27)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.1.0...1.2.0)

**Closed issues:**

- Update to Angular 4 and cli 1.0 final [\#56](https://github.com/ngx-rocket/generator-ngx-rocket/issues/56)

**Merged pull requests:**

- Feature/angular4 [\#57](https://github.com/ngx-rocket/generator-ngx-rocket/pull/57)

## [1.1.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.1.0) (2017-03-16)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.0.1...1.1.0)

**Enhancements**:

- Allow update of existing projects [\#47](https://github.com/ngx-rocket/generator-ngx-rocket/issues/47) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add authentication screens/workflow [\#32](https://github.com/ngx-rocket/generator-ngx-rocket/issues/32) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Broken jasmine typings  [\#55](https://github.com/ngx-rocket/generator-ngx-rocket/issues/55)
- Page title is not translated [\#51](https://github.com/ngx-rocket/generator-ngx-rocket/issues/51)

**Closed issues:**

- Add project changelog [\#50](https://github.com/ngx-rocket/generator-ngx-rocket/issues/50)

**Merged pull requests:**

- Feature/auth [\#54](https://github.com/ngx-rocket/generator-ngx-rocket/pull/54)
- Feature/update [\#53](https://github.com/ngx-rocket/generator-ngx-rocket/pull/53)
- Feature/updating [\#48](https://github.com/ngx-rocket/generator-ngx-rocket/pull/48)

## [1.0.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.0.1) (2017-03-06)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/1.0.0...1.0.1)

## [1.0.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/1.0.0) (2017-03-06)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.6...1.0.0)

**Enhancements**:

- Create a customizable cache service [\#15](https://github.com/ngx-rocket/generator-ngx-rocket/issues/15) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Create an Http service extension [\#14](https://github.com/ngx-rocket/generator-ngx-rocket/issues/14) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Make a yeoman generator from the SK [\#6](https://github.com/ngx-rocket/generator-ngx-rocket/issues/6) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Fixed bugs:**

- Warning on build [\#27](https://github.com/ngx-rocket/generator-ngx-rocket/issues/27)

**Merged pull requests:**

- Moved the starter kit into a yeoman generator \(closes \#6\) [\#46](https://github.com/ngx-rocket/generator-ngx-rocket/pull/46)
- 1.0 [\#43](https://github.com/ngx-rocket/generator-ngx-rocket/pull/43)
- Feature/http service [\#38](https://github.com/ngx-rocket/generator-ngx-rocket/pull/38)
- Feature/update [\#36](https://github.com/ngx-rocket/generator-ngx-rocket/pull/36)
- Updated translation system to use embedded .json files \(\#3, fix \#27\) [\#35](https://github.com/ngx-rocket/generator-ngx-rocket/pull/35)

## [0.9.6](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.6) (2017-02-22)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.5...0.9.6)

**Enhancements**:

- Add doc to explain HTML5 routing [\#25](https://github.com/ngx-rocket/generator-ngx-rocket/issues/25) [[documentation](https://github.com/ngx-rocket/generator-ngx-rocket/labels/documentation)]

**Merged pull requests:**

- Feature/update [\#31](https://github.com/ngx-rocket/generator-ngx-rocket/pull/31)
- Added doc to explain routing \(closes \#25, related to \#23\) [\#30](https://github.com/ngx-rocket/generator-ngx-rocket/pull/30)

## [0.9.5](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.5) (2017-02-15)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.4...0.9.5)

**Closed issues:**

- Improve package version integration [\#22](https://github.com/ngx-rocket/generator-ngx-rocket/issues/22)
- Upgrade to angular-cli latest beta [\#19](https://github.com/ngx-rocket/generator-ngx-rocket/issues/19)

**Merged pull requests:**

- Updated to angular-cli beta31 [\#28](https://github.com/ngx-rocket/generator-ngx-rocket/pull/28)
- Use npm package version properly [\#24](https://github.com/ngx-rocket/generator-ngx-rocket/pull/24)

## [0.9.4](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.4) (2017-02-08)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.3...0.9.4)

**Closed issues:**

- Add/update dev documentation [\#7](https://github.com/ngx-rocket/generator-ngx-rocket/issues/7)

**Merged pull requests:**

- Feature/no implicit any [\#21](https://github.com/ngx-rocket/generator-ngx-rocket/pull/21)
- Feature/beta28 [\#20](https://github.com/ngx-rocket/generator-ngx-rocket/pull/20)
- Feature/docs [\#17](https://github.com/ngx-rocket/generator-ngx-rocket/pull/17)

## [0.9.3](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.3) (2017-02-01)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.2...0.9.3)

**Fixed bugs:**

- erreur sur la commande npm install [\#18](https://github.com/ngx-rocket/generator-ngx-rocket/issues/18)

## [0.9.2](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.2) (2017-01-23)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.1...0.9.2)

## [0.9.1](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.1) (2017-01-19)
[Full Changelog](https://github.com/ngx-rocket/generator-ngx-rocket/compare/0.9.0...0.9.1)

**Enhancements**:

- Add stylelint [\#10](https://github.com/ngx-rocket/generator-ngx-rocket/issues/10) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add htmlhint [\#9](https://github.com/ngx-rocket/generator-ngx-rocket/issues/9) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Init project seed with angular-cli [\#4](https://github.com/ngx-rocket/generator-ngx-rocket/issues/4) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Add preliminary i18n support [\#2](https://github.com/ngx-rocket/generator-ngx-rocket/issues/2) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]
- Port SK web template to angular-2 [\#1](https://github.com/ngx-rocket/generator-ngx-rocket/issues/1) [[feature](https://github.com/ngx-rocket/generator-ngx-rocket/labels/feature)]

**Closed issues:**

- Update to latest bootstrap/ng-bootstrap version [\#13](https://github.com/ngx-rocket/generator-ngx-rocket/issues/13)

## [0.9.0](https://github.com/ngx-rocket/generator-ngx-rocket/tree/0.9.0) (2017-01-18)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
