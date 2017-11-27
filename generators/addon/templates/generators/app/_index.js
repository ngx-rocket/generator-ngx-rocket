'use strict';

const Generator = require('@ngx-rocket/core');
<% if (props.advanced) { -%>
const chalk = require('chalk');
const pkg = require('../../package.json');

class <%= props.className %>Generator extends Generator {
  // DO NOT add a constructor, it won't be called.
  // Use initializing() method instead.
  //
  // See Yeoman's doc run loop priorities for the list of specific tasks:
  // http://yeoman.io/authoring/running-context.html

  initializing() {
    // Setting version allows Yeoman to notify the user of updates
    this.version = pkg.version;
    this.log(`Using ${chalk.cyan('<%= props.projectName %>')} ${chalk.green(this.version)}`);
  }

  beforeWriting() {
    // Augment this generator's properties with shared properties so it can be
    // used in templates
    Object.assign(this.props, this.sharedProps);
  }
}
<% } -%>

module.exports = Generator.make({
  // Base directory of your templates
  baseDir: __dirname,
<% if (props.advanced) { -%>

  // Your generator (optional, you can use only templates)
  generator: <%= props.className %>Generator,
<% } -%>

  // Your generator prompts (optional)
  // See https://github.com/sboudrias/Inquirer.js#objects for details
  prompts: [
    {
      type: 'confirm',
      name: 'sayHello',
      message: 'Shall we say hello?',
      default: true
    },
    {
      type: 'input',
      name: 'helloName',
      message: 'To whom shall we say hello?',
      default: 'world',
      // Only ask this one when "yes" is replied to the sayHello prompt
      when: props => props.sayHello
    }
  ]
});
