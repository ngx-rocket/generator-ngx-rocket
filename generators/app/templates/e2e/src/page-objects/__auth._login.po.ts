/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class LoginPage {
<%   if (props.ui === 'ionic') { -%>
  usernameField = element(by.css('ion-input[formControlName="username"]'));
  passwordField = element(by.css('ion-input[formControlName="password"]'));
  loginButton = element(by.css('ion-button[type="submit"]'));
<%   } else { -%>
  usernameField = element(by.css('input[formControlName="username"]'));
  passwordField = element(by.css('input[formControlName="password"]'));
  loginButton = element(by.css('button[type="submit"]'));
<%   } -%>

  constructor() {
  }

  login() {
    this.usernameField.sendKeys('test');
    this.passwordField.sendKeys('123');
    this.loginButton.click();
  }
}
