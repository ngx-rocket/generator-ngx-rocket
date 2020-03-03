module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'What is the name of your app?'
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
      },
      {
        value: 'electron',
        name: 'Desktop app (using Electron)'
      }
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
    ]
  },
  {
    type: 'checkbox',
    name: 'desktop',
    message: 'Which desktop platform do you want to support?',
    when: props => props.target && props.target.includes('electron'),
    choices: [
      {
        value: 'windows',
        name: 'Windows',
        checked: true
      },
      {
        value: 'mac',
        name: 'macOS',
        checked: true
      },
      {
        value: 'linux',
        name: 'Linux',
        checked: true
      }
    ]
  },
  {
    type: 'list',
    name: 'ui',
    message: 'Which UI framework do you want?',
    choices: [
      {
        value: 'material',
        name: 'Angular Material (more website-oriented)'
      },
      {
        value: 'ionic',
        name: 'Ionic (more mobile-oriented)'
      },
      {
        value: 'bootstrap',
        name: 'Bootstrap (more website-oriented)'
      }
    ],
    default: props => (props.target && props.target.includes('cordova') ? 'ionic' : 'material')
  },
  {
    type: 'list',
    name: 'layout',
    message: 'Which kind of layout do you want?',
    choices: props => {
      return [
        {
          value: 'simple',
          name: 'Simple responsive header bar (more website-oriented)',
          when: props.ui === 'material'
        },
        {
          value: 'side-menu',
          name: 'Side menu with split panels (more app-oriented)',
          when: true
        },
        {
          value: 'tabs',
          name: 'Tabs menu (more app-oriented)',
          when: props.ui === 'ionic'
        }
      ].filter(choice => choice.when);
    },
    when: props => props.ui === 'material' || props.ui === 'ionic',
    default: 'side-menu'
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
    default: true
  },
  {
    type: 'confirm',
    name: 'angulartics',
    message: 'Do you want analytics support (with Angulartics2)?',
    default: false
  },
  {
    type: 'list',
    name: 'analyticsProvider',
    message: 'What analytics provider are you using?',
    choices: [
      {
        value: 'ga',
        name: 'Google Analytics'
      },
      {
        value: 'gtm',
        name: 'Google Tag Manager'
      },
      {
        value: 'other',
        name: 'Other'
      }
    ],
    when: props => props.angulartics,
    default: 'ga'
  },
  {
    type: 'input',
    name: 'googleAnalyticsAccount',
    message: 'What is your Google Analytics account (e.g. UA-1234567-1)?',
    when: props => props.angulartics && props.analyticsProvider === 'ga'
  },
  {
    type: 'checkbox',
    name: 'tools',
    message: 'Do you want additional tools?',
    choices: [
      {
        value: 'prettier',
        name: 'Prettier (automatic code formatting)',
        checked: true
      },
      {
        value: 'hads',
        name: 'Hads (markdown-based doc system)',
        checked: true
      },
      {
        value: 'compodoc',
        name: 'Compodoc (Angular doc generator)'
      },
      {
        value: 'jest',
        name: 'Jest (Delightful JavaScript Testing)'
      }
    ]
  },
  {
    type: 'checkbox',
    name: 'utility',
    message: 'Do you want additional libraries?',
    choices: [
      {
        value: 'lodash',
        name: 'Lodash (collection & general utilities)'
      },
      {
        value: 'ramda',
        name: 'Ramda (Lodash FP alternative)'
      },
      {
        value: 'moment',
        name: 'Moment.js (date management)'
      },
      {
        value: 'datefns',
        name: 'Date-fns (Moment.js FP alternative)'
      },
      {
        value: 'puppeteer',
        name: 'Puppeteer (Embedded Chrome for testing)'
      }
    ]
  }
];
