const assert = require("assert");
const helper = require("../helper.js");
const { clearLocalStorage } = require("../helper.js");
const webdriver = require("selenium-webdriver");
const { elementIsDisabled } = require("selenium-webdriver/lib/until.js");
const { By, until } = webdriver;

describe("Verify Button Countinue becames enabled after", function () {
  beforeEach(async function () {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
    await driver.get(process.env.URL);
    let continueButton = await driver.findElement(
      By.css(helper.firstPageContinueButton)
    );

    await continueButton.click();
  });

  afterEach(async function () {
    await clearLocalStorage(driver);
    await driver.quit();
  });

  it(" click on 'England and Wales' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(
      By.css(helper.locationBtnEnglandWales)
    );

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'Scotland' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(By.css(helper.locationBtnScotland));

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'Northern Ireland' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(
      By.css(helper.locationBtnNorternIreland)
    );

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'USA' button", async function () {

     const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(By.css(helper.locationBtnUSA));

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'New Zealand' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(
      By.css(helper.locationBtnNewZealand)
    );

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'Australia' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(
      By.css(helper.locationBtnAustralia)
    );

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'Canada' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(By.css(helper.locationBtnCanada));

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'Ireland' button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));

    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let location = await driver.findElement(By.css(helper.locationBtnIreland));

    await location.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });
});
