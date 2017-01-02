import { Ng2StarterKitPage } from './app.po';

describe('app', () => {
  let page: Ng2StarterKitPage;

  beforeEach(() => {
    page = new Ng2StarterKitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
