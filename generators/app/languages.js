const path = require('path');
const globby = require('globby');

// Extract languages from files available in /templates/src/translations/
module.exports = function() {
  const files = globby.sync(path.join(__dirname, 'templates/src/translations/*.json'));
  return files.map(file => path.basename(file).slice(2, 7));
};
