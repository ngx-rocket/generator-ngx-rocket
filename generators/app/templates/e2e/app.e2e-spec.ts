import { NgxStarterKitPage } from './app.po';

describe('app', () => {
  let page: NgxStarterKitPage;

  beforeEach(() => {
    page = new NgxStarterKitPage();
  });

  it('should display hello message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello world !');
  });
});
