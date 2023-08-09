 require('dotenv').config()
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

    assert.equal("PTA Events Onboarding",title);

  });

  
}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}

