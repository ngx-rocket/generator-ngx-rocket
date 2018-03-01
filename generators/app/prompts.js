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
    type: 'list',
    name: 'layout',
    message: 'Which kind of layout do you want?',
    choices: [
      {
        value: 'simple',
        name: 'Simple responsive header bar (more website-oriented)'
      },
      {
        value: 'side-menu',
        name: 'Side menu with split panels (more app-oriented)'
      }
    ],
    when: props => props.ui === 'material',
    default: 'simple'
  },
  {
    type: 'confirm',
    name: 'auth',
    message: 'Do you want authentication?',
    default: true
  },
  {
    type: 'confirm',
    name: 'lazy',
    message: 'Do you want lazy loading?',
    default: false,
    when: props => props.ui !== 'ionic'
  }
];
