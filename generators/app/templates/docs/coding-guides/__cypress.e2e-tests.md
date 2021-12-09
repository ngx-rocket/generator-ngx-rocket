# End-to-end tests coding guide

End-to-end (E2E for short) tests are meant to test the behavior of your application, from start to finish.

While unit tests are the first choice for catching bugs and regression on individual components, it is a good idea to
complement them with test cases covering the integration between the individual components, hence the need for E2E
tests.

These tests use [Cypress](https://www.cypress.io/), which is a next generation front end testing tool built for the modern web.

If you are new to Cypress, you can read the [introduction guide](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Cypress-Can-Be-Simple-Sometimes), as although it seems similar on the surface as other tools like Selenium or Protractor, Cypress is fundamentally different.

## Good practices

- Avoid whenever possible inter-dependencies between your E2E tests
- Run E2E tests on your continuous integration server against different browsers
- If you use an Agile methodology, cover each user story acceptance factors with an E2E test

## Page objects

E2E tests should follow the *[Page Object](https://github.com/SeleniumHQ/selenium/wiki/PageObjects)* pattern.

#### What is a page object?

A page object:

- Models the objects on a page under test:
  * *Properties* wrap page elements
  * *Methods* wrap code that interacts with the page elements
- Simplifies the test scripts
- Reduces the amount of duplicated code

If the UI changes, the fix only needs to be applied in one place.

#### How to define a page object

```typescript
// login.po.ts
export class LoginPage {
  get emailInput() {
    return cy.get('input[name=^"email"]');
  }

  get passwordInput() {
    return cy.get('input[name=^"password"]');
  }

  get loginButton() {
    return cy.get('button[(click)^="login"]');
  }

  get registerButton() {
    return cy.get('button[(click)^="register"]');
  }

  get greeting() {
    return cy.get('.greeting');
  }

  visit() {
    cy.visit('/');
  }
}
```

#### How to use a page object

```typescript
// login.e2e-spec.ts
import { LoginPage } from './login.po';

describe('Login', () => {
  let page: LoginPage;

  beforeEach(async () => {
    page = new LoginPage();
    page.visit();
  });

  it('should navigate to the register page when the register button is clicked', () => {
    page.registerButton.click();
    cy.url().should('include', '/register');
  });

  it('should allow a user to log in', async () => {
    page.emailInput.type('test@mail.com');
    page.passwordInput.type('abc123');
    page.loginButton.click();
    page.greeting.contains('Welcome, Test User');
  });
});
```

## Credits

Parts of this guide were freely inspired by this
[presentation](https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ).
