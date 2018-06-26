'use strict';

module.exports = [
  {
    name: 'skip-welcome',
    type: 'Boolean',
    required: false,
    description: 'Skip Yeoman\'s welcome message',
    defaults: false
  },
  {
    name: 'analytics',
    type: 'Boolean',
    required: false,
    description: 'Report anonymous usage analytics',
    defaults: true
  },
  {
    name: 'addons',
    type: 'String',
    required: false,
    description: 'Use specified space-separated addons',
    defaults: ''
  },
  {
    name: 'external-chrome',
    type: 'Boolean',
    required: false,
    description: 'Avoid downloading an extra Chrome binary',
    defaults: false
  },
  {
    name: 'raw',
    type: 'Boolean',
    required: false,
    description: 'Do not use any UI library',
    defaults: false
  },
  {
    name: 'location-strategy',
    type: value => {
      if (value !== 'hash' && value !== 'path') {
        console.error('Invalid location strategy: can be either "hash" or "path"');
        process.exit(-1);
      }
      return value;
    },
    required: false,
    description: 'Location strategy to use in Angular router: "path" or "hash"',
    defaults: 'path'
  }
];
