import { browser } from 'protractor';
<% if (props.auth) { -%>
import { LoginPage } from './page-objects/login.po';
<% } -%>
import { AppSharedPage } from './page-objects/app-shared.po';
import { ShellPage } from './page-objects/shell.po';

describe('when the app loads', () => {
<% if (props.auth) { -%>
  const login = new LoginPage();
<% } -%>
  const app = new AppSharedPage();
  const shell = new ShellPage();

  beforeAll(() => {
    app.navigateAndSetLanguage();
  });

<% if (props.auth) { -%>
  it('should display the login page', () => {
    expect(browser.getCurrentUrl()).toContain('/login');
  });

<% } else { -%>
  it('should display the shell page', () => {
    expect(browser.getCurrentUrl()).toContain('/');
  });

<% } -%>
<% if (props.auth) { -%>
  describe('and the user logs in', () => {
    beforeAll(() => {
      login.login();
    });

<% } else { -%>
  describe('and the page loads', () => {
<% } -%>
    it('should display the hello message', () => {
      expect(shell.getParagraphText()).toEqual('Hello world !');
    });
  });
});
