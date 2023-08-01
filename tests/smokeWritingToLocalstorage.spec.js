const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const helper = require("../helper.js");
const { clearLocalStorage, localStorageAccount } = require("../helper.js");

describe("Verify page redirection based on localStorage data", function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  beforeEach(async function () {
    await driver.get(process.env.URL);

    await clearLocalStorage(driver);
  });

  it("should redirect to /branding when using corresponding localStorage data", async function () {
    const localStorageBranding = helper.localStorageBranding;

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStorageBranding
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/branding"), 5000);
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/branding"));
  });

  it("should redirect to /school-details when using corresponding localStorage data", async function () {
    const localStorageOrganisationDetails =
      helper.localStorageOrganisationDetails;

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStorageOrganisationDetails
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/school-details"), 5000);
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/school-details"));
  });

  it("should redirect to /url when using corresponding localStorage data", async function () {
    const localStorageURL = helper.localStorageURL;

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStorageURL
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/url"), 5000);
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/url"));
  });

  it("should redirect to /account when using corresponding localStorage data", async function () {
    const dataStorageAccount = await localStorageAccount();

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      dataStorageAccount
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/account"), 5000);
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/account"));
  });

  it("should redirect to /packages when using corresponding localStorage data with password", async function () {
    const localStoragePackageWithPassword =
      helper.localStoragePackageWithPassword;

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStoragePackageWithPassword
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/packages"), 5000);
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/packages"));
  });

  it("should redirect to /packages when using corresponding localStorage data with choosed package", async function () {
    const localStoragePackageWithPackage =
      helper.localStoragePackageWithPackage;

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStoragePackageWithPackage
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/packages"), 5000);
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/packages"));
  });
});
