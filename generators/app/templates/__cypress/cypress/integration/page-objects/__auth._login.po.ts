/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

export class LoginPage {
  url = '/login';

  get usernameField() {
    return cy.get('[formControlName="username"]');
  }
  
  get passwordField() {
    return cy.get('[formcontrolname="password"]');
  }
  
  get loginButton() {
    return cy.get('[type="submit"]');
  }

  login() {
    this.usernameField.type('test');
    this.passwordField.type('123');
    this.loginButton.click();
  }
}
