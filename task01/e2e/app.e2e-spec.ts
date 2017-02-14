import { Task01Page } from './app.po';

describe('task01 App', function() {
  let page: Task01Page;

  beforeEach(() => {
    page = new Task01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
