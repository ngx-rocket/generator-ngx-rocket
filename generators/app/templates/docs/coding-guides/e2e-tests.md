# End-to-end tests coding guide

End-to-end (E2E for short) tests are meant to test the behavior of your application, from start to finish.

While unit tests are the first choice for catching bugs and regression on individual components, it is a good idea to
complement them with test cases covering the integration between the individual components, hence the need for E2E
tests.

These tests use [Protractor](https://github.com/angular/protractor), which is a framework built for Angular on top of
[Selenium](https://github.com/SeleniumHQ/selenium) to control browsers and simulate user inputs.
[Jasmine](http://jasmine.github.io) is used as the base test framework.

Many of protractor's actions and assertions are asynchronous and return promises.  To ensure that test steps are
performed in the intended order, generated projects are set up to use async/await as the flow control mechanism
because of its good readability.  See the [Protractor async/await](https://www.protractortest.org/#/async-await) page
for more information and examples on using async/await in tests, and the
[Protractor API guide](https://www.protractortest.org/#/api) to determine which API calls are asynchronous.

Beware that some examples of protractor tests you'll find on the internet might not be using async/await.  Tests like
these that you encounter were using the now-deprecated "selenium promise manager" flow control mechanism, so they
should not be used verbatim.  See the [Protractor control flow](https://www.protractortest.org/#/control-flow) page
for more details.

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
  
  async navigateTo() {
    await browser.get('/');
  }
  
  async getGreetingText() {
    return await element(by.css('.greeting')).getText();
  }
}
```

#### How to use a page object

```typescript
// login.e2e-spec.ts
import { LoginPage } from './login.po';

describe('Login', () => {
  let page: LoginPage ;

  beforeEach(async () => {
    page = new LoginPage();
    await page.navigateTo();
  });
  
  it('should navigate to the register page when the register button is clicked', async () => {
    await page.registerButton.click();
   
    expect(await browser.getCurrentUrl()).toContain('/register');
  });
  
  it('should allow a user to log in', async () => {
    await page.emailInput.sendKeys('test@mail.com');
    await page.passwordInput.sendKeys('abc123');
    await page.loginButton.click();

    expect(await page.getGreetingText()).toContain('Welcome, Test User');
  });
});
```

## Credits

Parts of this guide were freely inspired by this 
[presentation](https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ).
