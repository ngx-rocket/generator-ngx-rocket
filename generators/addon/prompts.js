module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'What\'s the name of your add-on?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What\'s the add-on description?',
    default: 'An awesome ngX-Rocket add-on'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Who\'s the author?',
    default: 'Your name'
  },
  {
    type: 'confirm',
    name: 'advanced',
    message: 'Do you need to customize the code?',
    default: false
  }
];
