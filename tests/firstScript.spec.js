 require('dotenv').config()
// const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
const helper = require("../helper.js");
var webdriver = require('selenium-webdriver'),
 By = webdriver.By,
 until=webdriver.until;


 describe('Verify ', async function () {
  let driver;

  beforeEach(async function () {
    driver = await new webdriver.Builder().forBrowser('chrome').build();
    await driver.get(process.env.URL);
  });

  afterEach(async function () {
   
    await driver.quit();
    
  });

  it('the first page has correct title', async function () {
 
    let title = await driver.getTitle();

    assert.equal("PTA Events Onboarding", title);

  });

  it('the first page has btn "Continue" clickable', async function () {
 
  
    let continueButton = await driver.findElement(By.css(helper.firstPageContinueButton));
    await continueButton.click();

  });

  it('the location page has location England Wales clickable', async function () {

  await driver.findElement(By.css(helper.firstPageContinueButton)).click();
  await driver.manage().setTimeouts({implicit: 500});
  let location = await driver.findElement(By.css(helper.locationBtnEnglandWales))
  console.log('Button is ',driver.findElement(By.css(helper.locationBtnEnglandWales)).getText())
    await location.click();
    await driver.manage().setTimeouts({implicit: 500});
    await driver.findElement(By.css(helper.locationBtnContinue)).click(); 

  });
}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}

