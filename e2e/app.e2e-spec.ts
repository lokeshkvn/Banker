import { BankerPage } from './app.po';

describe('banker App', () => {
  let page: BankerPage;

  beforeEach(() => {
    page = new BankerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
