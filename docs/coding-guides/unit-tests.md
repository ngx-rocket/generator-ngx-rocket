# Unit tests coding guide

The main objective of unit tests is to detect regressions and to help you design software components. A suite of
*good* unit tests can be *immensely* valuable for your project and makes it easier to refactor and expand your code.
But keep in mind that a suite of *bad* unit tests can also be *immensely* painful, and hurt your development by
inhibiting your ability to refactor or alter your code in any way.

## What to test?

Everything! But if you need priorities, at least all business logic code must be tested: services, helpers, models...
Shared directives/components should also be covered by unit tests, if you do not have the time to test every single
component.

Keep in mind that component unit tests should not overlap with [end-to-end tests](e2e-tests.md): while unit the tests
cover the isolated behavior of the component bindings and methods, the end-to-end tests in opposition should cover the
integration and interactions with other app components based on real use cases scenarios.

## Good practices

- Name your tests cleanly and consistently
- Do not only test nominal cases, the most important tests are the one covering the edge cases
- Each test should be independent to all the others
- Avoid unnecessary assertions: it's counter-productive to assert anything covered by another test, it just increase
  pointless failures and maintenance workload
- Test only one code unit at a time: if you cannot do this, it means you have an architecture problem in your app
- Mock out all external dependencies and state: if there is too much to mock, it is often a sign that maybe you
  should split your tested module into several more independent modules
- Clearly separate or identify these 3 stages of each unit test (the *3A*): *arrange*, *act* and *assert*
- When you fix a bug, add a test case for it to prevent regression

## Pitfalls

- Sometimes your architecture might mean your code modify static variables during unit tests. Avoid this if you can, 
  but if you can't, at least make sure each test resets the relevant statics before and after your tests.
- Don’t unit-test configuration settings
- Improving test coverage is good, but having meaningful tests is better: start with the latter first, and **only after
  essential features of your code unit are tested**, your can think of improving the coverage.

## Unit testing with Angular

A good starting point for learning is the official
[testing guide](https://angular.io/docs/ts/latest/guide/testing.html).

But as you will most likely want to go bit further in real world apps, these
[example test snippets](https://gist.github.com/wkwiatek/e8a4a9d92abc4739f04f5abddd3de8a7) are also very helpful to
learn how to cover most common testing use cases.
