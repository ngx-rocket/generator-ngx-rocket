'use strict';

const fs = require('fs');
const path = require('path');

function inExists(arr, value) {
  for (const i of arr) {
    if (i === value) {
      return true;
    }
  }
  return false;
}

function getFiles(dir, exts) {
  const files = [];
  if (typeof exts === 'string') {
    exts = [exts];
  }
  fs.readdirSync(dir).forEach(file => {
    if (!fs.statSync(path.join(dir, file)).isDirectory()) {
      if (!exts || inExists(exts, path.extname(file))) {
        files.push(file);
      }
    }
  });
  return files;
}

module.exports = function () {
  const files = getFiles(path.join(__dirname, 'templates', 'src', 'translations'), ['.json', '.yaml']);
  return files.map(file => path.extname(file.slice(0, -path.extname(file).length)).substr(2));
};
