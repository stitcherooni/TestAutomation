const { Builder, By, until } = require("selenium-webdriver");
const { WebDriverWait } = require("selenium-webdriver");

async function clickOnClickableElementByName(driver, elementLocator) {
  const waitTime = 10000; // max time awaiting 10 sec
  const wait = new WebDriverWait(driver, waitTime);
  const clickableElement = await wait.until(
    until.elementToBeClickable(By.name(elementLocator))
  );
  await clickableElement.click();
}

async function clickOnClickableElementByCss(driver, cssLocator) {
  const waitTime = 10000;
  const wait = new WebDriverWait(driver, waitTime);

  const clickableElement = await wait.until(
    until.elementToBeClickable(By.css(cssLocator))
  );
  await clickableElement.click();
}

async function clearLocalStorage(driver) {
  await driver.executeScript("localStorage.clear();");
}

async function scrollToBottom(driver) {
  await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
}

async function generateRandomUrl() {
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  const randomText = "autotestsurl" + randomNum;

  return randomText;
}

let firstPageContinueButton =
  "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div > a";
let locationBtnEnglandWales = "#countries > div:nth-child(1) > div";
let locationBtnScotland = '[data-name="Scotland"]';
let locationBtnNorternIreland = '[data-name="England & Wales"]';
let locationBtnUSA = '[data-name="England & Wales"]';
let locationBtnNewZealand = '[data-name="England & Wales"]';
let locationBtnAustralia = '[data-name="England & Wales"]';
let locationBtnCanada = '[data-name="England & Wales"]';
let locationBtnIreland = '[data-name="England & Wales"]';
let locationBtnContinue =
  "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div:nth-child(2) > button";

let starterPackage =
  '//*[@id="root"]/main/div/div/div[1]/div[2]/div[2]/div[2]/div/div[2]/button';
let btnContinueRegistration =
  "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div:nth-child(2) > button";

module.exports = {
  clearLocalStorage,
  scrollToBottom,
  clickOnClickableElementByName,
  clickOnClickableElementByCss,
  generateRandomUrl,

  firstPageContinueButton,
  locationBtnEnglandWales,
  locationBtnContinue,
  starterPackage,
  btnContinueRegistration,
};
