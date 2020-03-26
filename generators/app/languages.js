const path = require('path');
const fs = require('fs');

// Extract languages from files available in /templates/src/translations/
module.exports = function() {
  const translationsDir = path.join(__dirname, 'templates/src/translations');
  const files = fs.readdirSync(translationsDir).filter(file => path.extname(file) === '.json');
  return files.map(file => path.basename(file).slice(2, 7));
};
