<% if (props.auth) { -%>
import { browser } from 'protractor';
<% } -%>
import { AppPage } from './app.po';

describe('app', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });

<% if (props.auth) { -%>
  it('should display login page and login into app', () => {
    expect(browser.getCurrentUrl()).toContain('/login');
    page.login();
  });

<% } -%>
  it('should display hello message', () => {
    expect(page.getParagraphText()).toEqual('Hello world !');
  });
});
