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
        name: 'Responsive web app',
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
  // {
  //   type: 'confirm',
  //   name: 'pwa',
  //   message: 'Do you want progressive web app support? (manifest and service worker)',
  //   default: true,
  //   when: props => props.target.includes('web')
  // },
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
        value: 'ionic',
        name: 'Ionic (more mobile-oriented)'
      }
    ]
  },
  {
    type: 'confirm',
    name: 'auth',
    message: 'Do you want authentication?',
    default: true
  }
];
