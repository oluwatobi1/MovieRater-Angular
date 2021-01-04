import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Movie Rater');
  });
  it('should be able to login', () =>{
    const usernameField = browser.driver.findElement(by.id('username'))
    usernameField.sendKeys('movieraterproject')
    const passwordField = browser.driver.findElement(by.id("password"))
    passwordField.sendKeys("movieraterproject")
    browser.driver.findElement(by.id("submit")).click()

    const ele = element(by.id('logoutBtn'))
    browser.wait(ec.presenceOf(ele), 3000)
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
