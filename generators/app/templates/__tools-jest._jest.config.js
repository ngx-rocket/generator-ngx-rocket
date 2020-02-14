// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@env': '<rootDir>/src/environments/environment'
  },
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsConfig: '<rootDir>/tsconfig.spec.json'
    },
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
<% const excludedLibrairies = ['jest-test']
  if (props.target.includes('cordova')) { excludedLibrairies.push('@ionic-native'); }
  if (props.ui === 'ionic') { excludedLibrairies.push('@ionic'); }
  if (props.ui === 'bootstrap') { excludedLibrairies.push('@ng-bootstrap'); } -%>
  transformIgnorePatterns: ['node_modules/(?!(<%- excludedLibrairies.join('|') %>))']
};
