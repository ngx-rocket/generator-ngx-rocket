<% if (props.auth) { -%>
import { LoginPage } from './page-objects/login.po.cy';
<% } -%>
import { AppSharedPage } from './page-objects/app-shared.po.cy';
import { HomePage } from './page-objects/home.po.cy';

describe('when the app loads', () => {
<% if (props.auth) { -%>
  const login = new LoginPage();
<% } -%>
  const app = new AppSharedPage();
  const home = new HomePage();

  before(() => {
    app.navigateAndSetLanguage();
  });

<% if (props.auth) { -%>
  it('should display the login page and log in', () => {
    cy.url().should('include', login.url);
    login.login();
  });

<% } -%>
  it('should display the home page and say hello', () => {
    cy.url().should('include', home.url);
    home.welcomeText.contains('Hello world !');
  });
});
