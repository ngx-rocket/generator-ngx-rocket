/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

export class AppSharedPage {
  async navigateAndSetLanguage() {
    // Forces default language
    this.visit();
    cy.window()
      .then(window => {
        window.eval(`localStorage.setItem('language', 'en-US')`);
      });
  }

  visit() {
    cy.visit('/');
  }
}
