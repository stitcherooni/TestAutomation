require("dotenv").config();
const assert = require("assert");
const helper = require("../helper.js");
const {
  clearLocalStorage,
  scrollToBottom,
  generateRandomUrl,
} = require("../helper.js");
var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

describe("Smoke test. Verify it", async function () {
  before(async function () {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
    //await clearLocalStorage(driver);
    await driver.get(process.env.URL);
  });

  after(async function () {
    await clearLocalStorage(driver);
    await driver.quit();
  });

  it(" is able to choose location ", async function () {
    await driver.manage().setTimeouts({ implicit: 1000 });
    let continueButton = await driver.findElement(
      By.css(helper.firstPageContinueButton)
    );

    await continueButton.click();

    let location = await driver.findElement(
      By.css(helper.locationBtnEnglandWales)
    );

    await location.click();
    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.findElement(By.css(helper.btnContinue)).click();
  });

  it(" is able to fill in Organisation details web form ", async function () {
    await driver.findElement(By.id(helper.inputPTAName)).click();
    await driver.findElement(By.id(helper.inputPTAName)).sendKeys(process.env.PTANAME);
    await driver.findElement(By.id(helper.inputSchoolName)).click();
    await driver
      .findElement(By.id(helper.inputSchoolName))
      .sendKeys(process.env.ORGANISATIONNAME);
    await driver.findElement(By.id(helper.inputAddress1)).click();
    await driver.findElement(By.id(helper.inputAddress1)).sendKeys(process.env.ADDRESS1);
    await driver.findElement(By.id(helper.inputAddress2)).click();
    await driver.findElement(By.id(helper.inputAddress2)).sendKeys(process.env.ADDRESS1);
    await scrollToBottom(driver);
    await driver.findElement(By.id(helper.inputTown)).click();
    await driver.findElement(By.id(helper.inputTown)).sendKeys(process.env.ADDRESS2);
    await driver.findElement(By.id(helper.inputCounty)).click();
    await driver.findElement(By.id(helper.inputCounty)).sendKeys(process.env.COUNTY);
    await driver.findElement(By.id(helper.inputPostCode)).click();
    await driver.findElement(By.id(helper.inputPostCode)).sendKeys(process.env.POSTCODE);
    await driver.findElement(By.css(helper.btnContinue)).click();
  });

  it(" is able to choose color ", async function () {
    await driver.findElement(By.css(helper.color9)).click();
    await driver.findElement(By.css(helper.btnContinue)).click();
  });

  it(" is able to choose URL of the Organisation  ", async function () {
    await driver.findElement(By.id(helper.inputURL)).click();
    await driver.manage().setTimeouts({ implicit: 3000 });
    await driver
      .findElement(By.id(helper.inputURL))
      .sendKeys("autotestsurl" + (Math.floor(Math.random() * 900000) + 100000));
    await driver.wait(
      until.elementLocated(By.xpath(helper.notificationURL)),
      20000
    );
    await driver.findElement(By.css(helper.btnContinue)).click();
  });

  it(" is able to fill in Account details web form  ", async function () {
    await driver.findElement(By.id(helper.inputFirstName)).click();
    await driver
      .findElement(By.id(helper.inputFirstName))
      .sendKeys(process.env.FIRSTNAME);
    await driver.findElement(By.id(helper.inputSecondName)).click();
    await driver
      .findElement(By.id(helper.inputSecondName))
      .sendKeys(process.env.SECONDNAME);

    const element = await driver.findElement(By.id(helper.dropdnRole));

    await driver.findElement(By.id(helper.dropdnRole)).click();

    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.findElement(By.css(helper.roleChair)).click();
    await driver.findElement(By.id(helper.inputEmail)).click();
    await driver
      .findElement(By.id(helper.inputEmail))
      .sendKeys(process.env.EMAIL);
    await scrollToBottom(driver);
    await driver.findElement(By.id(helper.inputPassword)).click();

    await driver
      .findElement(By.id(helper.inputPassword))
      .sendKeys(process.env.PASSWORD);
    await driver.findElement(By.id(helper.inputRepeatPassword)).click();
    await driver
      .findElement(By.id(helper.inputRepeatPassword))
      .sendKeys(process.env.PASSWORD);
    await driver.findElement(By.css(helper.btnContinue)).click();
  });

  it(" is able to choose package  ", async function () {
    await scrollToBottom(driver);
    await driver.wait(
      until.elementLocated(By.xpath(helper.starterPackage)),
      20000
    );

    await driver.findElement(By.xpath(helper.starterPackage)).click();
    await driver.wait(until.elementLocated(By.css(helper.btnContinue)), 20000);
    await driver.findElement(By.css(helper.btnContinue)).click();
  });

  it(" is able display the final page", async function () {
    await driver.wait(
      until.elementLocated(By.css(helper.messageSuccess)),
      20000
    );
    assert.equal(process.env.URL + "/final", await driver.getCurrentUrl());
  });
}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}
