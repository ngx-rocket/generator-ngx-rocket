/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

export class HomePage {
  url = '/home';

  get welcomeText() {
<% if (props.ui === 'ionic') { -%>
    return cy.get('app-root ion-card-title');
<% } else if (props.ui === 'material') { -%>
    return cy.get('app-root mat-card-title');
<% } else { -%>
    return cy.get('app-root h1');
<% } -%>
  }
}
