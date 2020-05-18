# TypeScript coding guide

[TypeScript](http://www.typescriptlang.org) is a superset of JavaScript that greatly helps building large web
applications.

Coding conventions and best practices comes from the
[TypeScript guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines), and are also detailed in the
[TypeScript Deep Dive Style Guide](https://basarat.gitbooks.io/typescript/content/docs/styleguide/styleguide.html).
In addition, this project also follows the general [Angular style guide](https://angular.io/guide/styleguide).

## Naming conventions

- Use `PascalCase` for types, classes, interfaces, constants and enum values.
- Use `camelCase` for variables, properties and functions
- Avoid prefixing interfaces with a capital `I`, see [Angular style guide](https://angular.io/guide/styleguide#!#03-03)
- Do not use `_` as a prefix for private properties. An exception can be made for backing fields like this:
  ```typescript
  private _foo: string;
  get foo() { return this._foo; } // foo is read-only to consumers
  ```

## Ordering

- Within a file, type definitions should come first
- Within a class, these priorities should be respected:
  * Properties comes before functions
  * Static symbols comes before instance symbols
  * Public symbols comes before private symbols

## Coding rules

- Use single quotes `'` for strings
- Always use strict equality checks: `===` and `!==` instead of `==` or `!=` to avoid comparison pitfalls (see
  [JavaScript equality table](https://dorey.github.io/JavaScript-Equality-Table/)).
  The only accepted usage for `==` is when you want to check a value against `null` or `undefined`.
- Use `[]` instead of `Array` constructor
- Use `{}` instead of `Object` constructor
- Always specify types for function parameters and returns (if applicable)
- Do not export types/functions unless you need to share it across multiple components
- Do not introduce new types/values to the global namespace
- Use arrow functions over anonymous function expressions
- Only surround arrow function parameters when necessary.
  For example, `(x) => x + x` is wrong but the following are correct:
  * `x => x + x`
  * `(x, y) => x + y`
  * `<T>(x: T, y: T) => x === y`

## Definitions

In order to infer types from JavaScript modules, TypeScript language supports external type definitions. They are
located in the `node_modules/@types` folder.

To manage type definitions, use standard `npm install|update|remove` commands.

## Enforcement

Coding rules are enforced in this project via [TSLint](https://github.com/palantir/tslint).
Angular-specific rules are also enforced via the [Codelyzer](https://github.com/mgechev/codelyzer) rule extensions.

## Learn more

The read of [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript) is recommended, this is a very good
reference book for TypeScript (and also open-source).
