// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
<% if (props.tools.includes('puppeteer')) { -%>

process.env.CHROME_BIN = require('puppeteer').executablePath();
<% } -%>
const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      captureConsole: Boolean(process.env.KARMA_ENABLE_CONSOLE)
    },
    junitReporter: {
      outputDir: path.join(__dirname, './reports/junit/'),
      outputFile: 'TESTS-xunit.xml',
      useBrowserName: false,
      suite: '' // Will become the package name attribute in xml testsuite element
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'junit'],
    port: 9876,
    colors: true,
    // Level of logging, can be: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
