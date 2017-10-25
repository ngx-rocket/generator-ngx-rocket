'use strict';

module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'What\'s the name of your app?'
  },
  {
    type: 'checkbox',
    name: 'target',
    message: 'What kind of app do you want to create?',
    choices: [
      {
        value: 'web',
        name: 'Web app',
        checked: true
      },
      {
        value: 'cordova',
        name: 'Mobile app (using Cordova)'
      }
      // {
      //   value: 'electron',
      //   name: 'Desktop app (using Cordova)'
      // }
    ]
  },
  {
    type: 'confirm',
    name: 'pwa',
    message: 'Do you want a progressive web app? (with manifest and service worker)',
    default: true,
    when: props => props.target && props.target.includes('web')
  },
  {
    type: 'checkbox',
    name: 'mobile',
    message: 'Which mobile platform do you want to support?',
    when: props => props.target && props.target.includes('cordova'),
    choices: [
      {
        value: 'ios',
        name: 'iOS',
        checked: true
      },
      {
        value: 'android',
        name: 'Android',
        checked: true
      }
      // {
      //   value: 'windows',
      //   name: 'Windows (Universal)'
      // }
    ]
  },
  {
    type: 'checkbox',
    name: 'webview',
    message: 'Use enhanced web view?',
    when: props => props.target && props.target.includes('cordova'),
    choices: props => {
      const choices = [];
      if (props.mobile.includes('ios')) {
        choices.push({
          value: 'wkwebview',
          name: '[iOS] WKWebView (best for iOS 9+)',
          checked: true
        });
      }
      if (props.mobile.includes('android')) {
        choices.push({
          value: 'crosswalk',
          name: '[Android] Crosswalk (best for Android < 4.4 support)',
          checked: false
        });
      }
      return choices;
    }
  },
  {
    type: 'list',
    name: 'ui',
    message: 'Which UI framework do you want?',
    choices: [
      {
        value: 'bootstrap',
        name: 'Bootstrap (more website-oriented)'
      },
      {
        value: 'material',
        name: 'Angular Material (more website-oriented)'
      },
      {
        value: 'ionic',
        name: 'Ionic (more mobile-oriented)'
      }
    ],
    default: props => props.target && props.target.includes('cordova') ? 'ionic' : 'bootstrap'
  },
  {
    type: 'confirm',
    name: 'auth',
    message: 'Do you want authentication?',
    default: true
  }
];
