import { Prog1Page } from './app.po';

describe('prog1 App', function() {
  let page: Prog1Page;

  beforeEach(() => {
    page = new Prog1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
