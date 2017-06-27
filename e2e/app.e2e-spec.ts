import { ComplainPage } from './app.po';

describe('complain App', () => {
  let page: ComplainPage;

  beforeEach(() => {
    page = new ComplainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
