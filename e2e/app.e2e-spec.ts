import { Ng2StarterKitPage } from './app.po';

describe('app', () => {
  let page: Ng2StarterKitPage;

  beforeEach(() => {
    page = new Ng2StarterKitPage();
  });

  it('should display hello message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello world !');
  });
});
