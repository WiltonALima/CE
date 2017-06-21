import { CeA4Page } from './app.po';

describe('ce-a4 App', () => {
  let page: CeA4Page;

  beforeEach(() => {
    page = new CeA4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
