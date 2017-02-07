# End-to-end tests coding guide

End-to-end (E2E for short) tests are meant to test the behavior of your application, from start to finish.

While unit tests are the first choice for catching bugs and regression on individual components, it is a good idea to
complement them with test cases covering the integration between the individual components, hence the need for E2E
tests.

These tests use [Protractor](https://github.com/angular/protractor), which is a framework built for Angular on top of
[Selenium](https://github.com/SeleniumHQ/selenium) to control browsers and simulate user inputs.
[Jasmine](http://jasmine.github.io) is used as the base test framework.

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
import { browser, element, by } from 'protractor';

export class LoginPage {
  emailInput = element(by.css('input[name=^"email"]'));
  passwordInput = element(by.css('input[name=^"password"]'));
  loginButton = element(by.css('button[(click)^="login"]'));
  registerButton = element(by.css('button[(click)^="register"]'));
  
  navigateTo() {
    return browser.get('/');
  }
  
  getGreetingText() {
    return element(by.css('.greeting')).getText();
  }
}
```

#### How to use a page object

```typescript
// login.e2e-spec.ts
import { LoginPage } from './login.po';

describe('Login', () => {
  let page: LoginPage ;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });
  
  it('should navigate to the register page when the register button is clicked', () => {
    page.registerButton.click();
   
    expect(browser.getCurrentUrl()).toContain('/register');
  });
  
  it('should allow a user to log in', () => {
    page.emailInput.sendKeys('test@mail.com');
    page.passwordInput.sendKeys('abc123');
    page.loginButton.click();

    expect(page.getGreetingText()).toContain('Welcome, Test User');
  });
});
```

## Credits

Parts of this guide were freely inspired by this 
[presentation](https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ).
