const chalk = require('chalk');

const deployers = [
  {
    value: 'none',
    name: 'No deployment',
    package: null
  },
  {
    value: 'firebase',
    name: 'Firebase',
    package: '@angular/fire'
  },
  {
    value: 'azure',
    name: 'Azure',
    package: '@azure/ng-deploy'
  },
  {
    value: 'now',
    name: 'Now',
    package: '@zeit/ng-deploy'
  },
  {
    value: 'netlify',
    name: 'Netlify',
    package: '@netlify-builder/deploy'
  },
  {
    value: 'github',
    name: 'GitHub Pages',
    package: 'angular-cli-ghpages'
  },
  {
    value: 'aws',
    name: 'Amazon',
    package: '@jefiozie/ngx-aws-deploy'
  },
  {
    value: 'docker',
    name: 'Docker',
    package: 'ngx-deploy-docker'
  }
];

const deployerChoices = deployers.map((d) => ({
  value: d.value,
  name: d.name + (d.value === 'none' ? '' : ` (with ${chalk.green(d.package)})`)
}));
const deployerValues = deployers.map((d) => d.value);
const deployerValuesHelp = deployers.map(
  (d) => d.value + (d.value === 'none' ? '' : ` (use ${chalk.green(d.package)})`)
);

module.exports = {
  deployers,
  deployerChoices,
  deployerValues,
  deployerValuesHelp
};
