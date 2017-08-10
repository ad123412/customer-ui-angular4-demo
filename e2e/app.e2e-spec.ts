import { CustomerDemoUiPage } from './app.po';

describe('customer-demo-ui App', () => {
  let page: CustomerDemoUiPage;

  beforeEach(() => {
    page = new CustomerDemoUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
