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
    await driver.findElement(By.css(helper.locationBtnContinue)).click();
  });

  it(" is able to fill in Organisation details web form ", async function () {
    await driver.findElement(By.id("ptaName")).click();
    await driver.findElement(By.id("ptaName")).sendKeys("PTA Name");
    await driver.findElement(By.id("schoolName")).click();
    await driver.findElement(By.id("schoolName")).sendKeys("School  Name");
    await driver.findElement(By.id("address1")).click();
    await driver.findElement(By.id("address1")).sendKeys("Address1");
    await driver.findElement(By.id("address2")).click();
    await driver.findElement(By.id("address2")).sendKeys("Address2");
    await scrollToBottom(driver);
    await driver.findElement(By.id("town")).click();
    await driver.findElement(By.id("town")).sendKeys("Town");
    await driver.findElement(By.id("county")).click();
    await driver.findElement(By.id("county")).sendKeys("Country");
    await driver.findElement(By.id("postCode")).click();
    await driver.findElement(By.id("postCode")).sendKeys("Postcode");
    await driver.findElement(By.css(".sc-eqUAAy")).click();
    await driver
      .findElement(By.css(".hrGTBD > .PrivateSwitchBase-input"))
      .click();
    await driver.findElement(By.css(".sc-eqUAAy")).click();
  });

  it(" is able to choose URL of the Organisation  ", async function () {
    try {
      await driver.findElement(By.id("ptaUrl")).click();
      await driver.manage().setTimeouts({ implicit: 3000 });
      await driver
        .findElement(By.id("ptaUrl"))
        .sendKeys(
          "autotestsurl" + (Math.floor(Math.random() * 900000) + 100000)
        );

      await driver.manage().setTimeouts({ implicit: 3000 });

      await driver
        .findElement(
          By.css(
            "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div.sc-dhKdcB.eTQjbl.sc-eDPEul.gTYULm.steps-progress > p > span"
          )
        )
        .click();
      await driver.findElement(By.id("ptaUrl")).click();

      await driver.manage().setTimeouts({ implicit: 10000 });
      await driver
        .findElement(By.xpath("//button[contains(.,'Continue')]"))
        .click();
    } catch (e) {}

    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="ptaUrl-helper-text"]/span')),
      20000
    );
    await driver
      .findElement(By.xpath("//button[contains(.,'Continue')]"))
      .click();
  });

  it(" is able to fill in Account details web form  ", async function () {
    await driver.findElement(By.id("firstName")).click();
    await driver.findElement(By.id("firstName")).sendKeys("First Name");
    await driver.findElement(By.id("secondName")).click();
    await driver.findElement(By.id("secondName")).sendKeys("Second Name");

    const element = await driver.findElement(By.id("ptaRole"));

    await driver.findElement(By.id("ptaRole")).click();

    await driver.manage().setTimeouts({ implicit: 500 });
    await driver
      .findElement(
        By.css(
          "#menu-role > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-19k1qda > ul > li:nth-child(1)"
        )
      )
      .click();
    await driver.findElement(By.id("ptaEmail")).click();
    await driver.findElement(By.id("ptaEmail")).sendKeys("ajustlike@gmail.com");
    await scrollToBottom(driver);
    await driver.findElement(By.id("ptaPassword")).click();

    await driver.findElement(By.id("ptaPassword")).sendKeys("!Asd123456");
    await driver.findElement(By.id("ptaRepeatPassword")).click();
    await driver.findElement(By.id("ptaRepeatPassword")).sendKeys("!Asd123456");
    await driver.findElement(By.css(".sc-eqUAAy")).click();
  });

  it(" is able to choose package  ", async function () {
    await scrollToBottom(driver);
    await driver.wait(
      until.elementLocated(By.xpath(helper.starterPackage)),
      20000
    );

    await driver.findElement(By.xpath(helper.starterPackage)).click();
    await driver.wait(until.elementLocated(By.css(".sc-eqUAAy")), 20000);
    await driver.findElement(By.css(".sc-eqUAAy")).click();
  });

  it(" is able display the final page", async function () {
    await driver.wait(
      until.elementLocated(By.css("#root > main > div > div > div > h2")),
      20000
    );
    assert.equal(process.env.URL + "/final", await driver.getCurrentUrl());
  });
}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}
