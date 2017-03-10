import { UnieroslistingsPage } from './app.po';

describe('unieroslistings App', function() {
  let page: UnieroslistingsPage;

  beforeEach(() => {
    page = new UnieroslistingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
