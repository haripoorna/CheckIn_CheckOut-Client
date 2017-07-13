import { CheckInCheckOutPage } from './app.po';

describe('check-in-check-out App', () => {
  let page: CheckInCheckOutPage;

  beforeEach(() => {
    page = new CheckInCheckOutPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
