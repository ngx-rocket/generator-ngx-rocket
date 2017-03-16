<% if (props.auth) { -%>
import { browser } from 'protractor';
<% } -%>
import { NgxStarterKitPage } from './app.po';

describe('app', () => {
  let page: NgxStarterKitPage;

  beforeEach(() => {
    page = new NgxStarterKitPage();
  });

<% if (props.auth) { -%>
  it('should display login page and login into app', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');
    page.login();
  });

<% } -%>
  it('should display hello message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello world !');
  });
});
