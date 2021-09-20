// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: {
        ignoreCodes: ['TS151001'],
      }
    },
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
<% const excludedLibrairies = ['jest-test']
  if (props.target.includes('cordova')) { excludedLibrairies.push('@ionic-native'); }
  if (props.ui === 'ionic') { excludedLibrairies.push('@ionic'); }
  if (props.ui === 'bootstrap') { excludedLibrairies.push('@ng-bootstrap'); } -%>
  transformIgnorePatterns: ['node_modules/(?!(<%- excludedLibrairies.join('|') %>))']
};
