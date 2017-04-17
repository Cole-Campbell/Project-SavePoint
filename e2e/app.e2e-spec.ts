import { SavePointPage } from './app.po';

describe('save-point App', () => {
  let page: SavePointPage;

  beforeEach(() => {
    page = new SavePointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SP works!');
  });
});
