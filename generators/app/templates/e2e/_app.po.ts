/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class NgxStarterKitPage {
<% if (props.auth) { -%>
  usernameField = element(by.css('[formControlName="username"]'));
  passwordField = element(by.css('[formControlName="password"]'));
  loginButton = element(by.css('button[type="submit"]'));
<% } -%>
  navigateTo() {
    return browser.get('/');
  }

<% if (props.auth) { -%>
  login() {
    this.usernameField.sendKeys('test');
    this.passwordField.sendKeys('123');
    this.loginButton.click();
  }

<% } -%>
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
