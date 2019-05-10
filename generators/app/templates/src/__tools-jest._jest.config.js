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
<% if (props.ui === 'ionic') { -%>
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
<% } else { -%>
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ionic|@ionic-native))'],
<% } -%>
};
