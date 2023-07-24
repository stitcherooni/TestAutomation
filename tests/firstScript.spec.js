 require('dotenv').config()
// const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
var webdriver = require('selenium-webdriver'),
 By = webdriver.By,
 until=webdriver.until;

// var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.findElement(By.css('button'))
 
//  driver.get(process.env.URL)


 describe('First script', async function () {
  let driver = await new webdriver.Builder().forBrowser('chrome').build();


  it('First Selenium script', async function () {
    await driver.get(process.env.URL);

    let title = await driver.getTitle();
    assert.equal("PTA Events Onboarding", title);

    await driver.manage().setTimeouts({implicit: 500});

    
    let continueButton = await driver.findElement(By.css('button'));
      await continueButton.click();

    async () => await driver.quit()

  });
}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}

