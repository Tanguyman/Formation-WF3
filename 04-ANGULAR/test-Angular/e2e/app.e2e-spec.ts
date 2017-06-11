import { TestAngularPage } from './app.po';

describe('test-angular App', () => {
  let page: TestAngularPage;

  beforeEach(() => {
    page = new TestAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
