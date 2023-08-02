require("dotenv").config();
const assert = require("assert/strict");
const helper = require("../helper.js");
const {
  clearLocalStorage,
  scrollToBottom,
  parseData,
} = require("../helper.js");
var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

describe("Verify the local data storing after the", async function () {
  before(async function () {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
    await driver.get(process.env.URL);
  });

  after(async function () {
    await clearLocalStorage(driver);
    await driver.quit();
  });

  it(" location is choosed ", async function () {
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

    assert.equal(
      true,
      (await parseData()).location.length > 0,
      "Location value should be added to localstorage"
    );
  });

  it(" Organisation details web form is filled in", async function () {
    await driver.findElement(By.id(helper.inputPTAName)).click();
    await driver
      .findElement(By.id(helper.inputPTAName))
      .sendKeys(process.env.PTANAME);
    await driver.findElement(By.id(helper.inputSchoolName)).click();
    await driver
      .findElement(By.id(helper.inputSchoolName))
      .sendKeys(process.env.ORGANISATIONNAME);
    await driver.findElement(By.id(helper.inputAddress1)).click();
    await driver
      .findElement(By.id(helper.inputAddress1))
      .sendKeys(process.env.ADDRESS1);
    await driver.findElement(By.id(helper.inputAddress2)).click();
    await driver
      .findElement(By.id(helper.inputAddress2))
      .sendKeys(process.env.ADDRESS2);
    await scrollToBottom(driver);
    await driver.findElement(By.id(helper.inputTown)).click();
    await driver
      .findElement(By.id(helper.inputTown))
      .sendKeys(process.env.TOWN);
    await driver.findElement(By.id(helper.inputCounty)).click();
    await driver
      .findElement(By.id(helper.inputCounty))
      .sendKeys(process.env.COUNTY);
    await driver.findElement(By.id(helper.inputPostCode)).click();
    await driver
      .findElement(By.id(helper.inputPostCode))
      .sendKeys(process.env.POSTCODE);
    await driver.findElement(By.css(helper.btnContinue)).click();

    let localStData = await parseData();
    assert.equal(
      true,
      localStData.location.length > 0,
      "Location value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.ptaName == process.env.PTANAME,
      "PTA Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.schoolName == process.env.ORGANISATIONNAME,
      "School Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address1 == process.env.ADDRESS1,
      "Address 1 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address2 == process.env.ADDRESS2,
      "Address 2 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.town == process.env.TOWN,
      "Town value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.county == process.env.COUNTY,
      "County value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.postCode == process.env.POSTCODE,
      "Postcode value should be added to localstorage"
    );
  });

  it(" color is choosed", async function () {
    await driver.findElement(By.css(helper.color9)).click();
    await driver.findElement(By.css(helper.btnContinue)).click();
    let localStData = await parseData();
    assert.equal(
      true,
      localStData.location.length > 0,
      "Location value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.ptaName == process.env.PTANAME,
      "PTA Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.schoolName == process.env.ORGANISATIONNAME,
      "School Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address1 == process.env.ADDRESS1,
      "Address 1 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address2 == process.env.ADDRESS2,
      "Address 2 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.town == process.env.TOWN,
      "Town value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.county == process.env.COUNTY,
      "County value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.postCode == process.env.POSTCODE,
      "Postcode value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaBrandingColor.length > 0,
      "PtaBrandingColor value should be added to localstorage"
    );
  });

  it(" URL of the Organisation is choosed  ", async function () {
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

    let localStData = await parseData();
    assert.equal(
      true,
      localStData.location.length > 0,
      "Location value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.ptaName == process.env.PTANAME,
      "PTA Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.schoolName == process.env.ORGANISATIONNAME,
      "School Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address1 == process.env.ADDRESS1,
      "Address 1 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address2 == process.env.ADDRESS2,
      "Address 2 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.town == process.env.TOWN,
      "Town value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.county == process.env.COUNTY,
      "County value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.postCode == process.env.POSTCODE,
      "Postcode value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaBrandingColor.length > 0,
      "Pta Branding Color value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaUrl.length > 0,
      "Pta Url value should be added to localstorage"
    );
  });

  it(" Account details web form is filled in ", async function () {
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

    let localStData = await parseData();
    assert.equal(
      true,
      localStData.location.length > 0,
      "Location value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.ptaName == process.env.PTANAME,
      "PTA Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.schoolName == process.env.ORGANISATIONNAME,
      "School Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address1 == process.env.ADDRESS1,
      "Address 1 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address2 == process.env.ADDRESS2,
      "Address 2 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.town == process.env.TOWN,
      "Town value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.county == process.env.COUNTY,
      "County value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.postCode == process.env.POSTCODE,
      "Postcode value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaBrandingColor.length > 0,
      "Pta Branding Color value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaUrl.length > 0,
      "Pta Url value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.firstName == process.env.FIRSTNAME,
      "First Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.secondName == process.env.SECONDNAME,
      "Second Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.role.length > 0,
      "Role value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.email == process.env.EMAIL,
      "Email value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.password == process.env.PASSWORD,
      "Password value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.repeatPassword == process.env.PASSWORD,
      "Password value should be added to localstorage"
    );
  });

  it(" package is choosed ", async function () {
    await scrollToBottom(driver);
    await driver.wait(
      until.elementLocated(By.xpath(helper.starterPackage)),
      20000
    );

    await driver.findElement(By.xpath(helper.starterPackage)).click();
    await driver.wait(until.elementLocated(By.css(helper.btnContinue)), 20000);
    await driver.findElement(By.css(helper.btnContinue)).click();
    let localStData = await parseData();
    assert.equal(
      true,
      localStData.location.length > 0,
      "Location value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.ptaName == process.env.PTANAME,
      "PTA Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.schoolName == process.env.ORGANISATIONNAME,
      "School Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address1 == process.env.ADDRESS1,
      "Address 1 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.address2 == process.env.ADDRESS2,
      "Address 2 value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.town == process.env.TOWN,
      "Town value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.county == process.env.COUNTY,
      "County value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.postCode == process.env.POSTCODE,
      "Postcode value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaBrandingColor.length > 0,
      "Pta Branding Color value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.brandingDetails.ptaUrl.length > 0,
      "Pta Url value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.firstName == process.env.FIRSTNAME,
      "First Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.secondName == process.env.SECONDNAME,
      "Second Name value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.role.length > 0,
      "Role value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.email == process.env.EMAIL,
      "Email value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.password == process.env.PASSWORD,
      "Password value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.accountDetails.repeatPassword == process.env.PASSWORD,
      "Password value should be added to localstorage"
    );
    assert.equal(
      true,
      localStData.schoolDetails.planTypeId > 0,
      "PlanTypeId value should be added to localstorage"
    );
  });

  it(" is able display the final page", async function () {
    await driver.wait(
      until.elementLocated(By.css(helper.messageSuccess)),
      20000
    );
    assert.equal(process.env.URL + "/final", await driver.getCurrentUrl());
  });
}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}
