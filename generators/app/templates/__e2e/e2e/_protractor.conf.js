// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
<% if (props.tools.includes('puppeteer')) { -%>
process.env.CHROME_BIN = require('puppeteer').executablePath();
<% } -%>

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  SELENIUM_PROMISE_MANAGER: false,
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: process.env.PROTRACTOR_BROWSER || 'chrome',
    chromeOptions: {
      binary: process.env.PROTRACTOR_CHROME_BIN || undefined,
      args: process.env.PROTRACTOR_CHROME_ARGS ? JSON.parse(process.env.PROTRACTOR_CHROME_ARGS) : ['lang=en-US'],
      prefs: {
        intl: { accept_languages: 'en-US' }
      }
    }
  },
  // Only works with Chrome and Firefox
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    // Better console spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'pretty' } }));
  }
};
