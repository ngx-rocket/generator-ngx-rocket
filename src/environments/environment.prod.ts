// For the meanwhile the entire package.json file is imported to get the version.
// This is suboptimal, but until angular-cli support add-ons, we cannot provide a hook to simply extract the version
// from the whole json.
const pkg = require('../../package.json');

export const environment = {
  production: true,
  version: pkg.version,
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};
