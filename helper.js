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

async function parseData() {
  const storData = await driver.executeScript(
      `return JSON.parse(localStorage.getItem("persist:pta-events"))`
    );
    const parsedData = JSON.parse(storData.signup);
    return parsedData 
  
}

//the first page
let firstPageContinueButton =
  "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div > a";

//location page
let locationBtnEnglandWales = "#countries > div:nth-child(1) > div";
let locationBtnScotland = '.sc-fjvvzt:nth-child(2) > .image-wrapper';
let locationBtnNorternIreland = '.sc-fjvvzt:nth-child(3) > .image-wrapper';
let locationBtnUSA = '.sc-fjvvzt:nth-child(4) > .image-wrapper';;
let locationBtnNewZealand = '.sc-fjvvzt:nth-child(5) > .image-wrapper';;
let locationBtnAustralia = '.sc-fjvvzt:nth-child(6) > .image-wrapper';;
let locationBtnCanada = '.sc-fjvvzt:nth-child(7) > .image-wrapper';;
let locationBtnIreland = '.sc-fjvvzt:nth-child(8) > .image-wrapper';
let btnContinueLocation =
  "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div:nth-child(2) > button";

//organisation web form
let inputPTAName = "ptaName";
let inputSchoolName = "schoolName";
let inputAddress1 = "address1";
let inputAddress2 = "address2";
let inputTown = "town";
let inputCounty = "county";
let inputPostCode = "postCode";
let btnContinue = ".sc-eqUAAy";

//color page
let color1 = ".itoEEl > .PrivateSwitchBase-input"; //Peachy Pinky
let color2 = ".dEAwDV > .PrivateSwitchBase-input";
let color3 = ".clOXBF > .PrivateSwitchBase-input";
let color4 = ".eDOvnS > .PrivateSwitchBase-input";
let color5 = ".hTeWZK > .PrivateSwitchBase-input";
let color6 = ".gLxpPB > .PrivateSwitchBase-input";
let color7 = ".ugRht > .PrivateSwitchBase-input";
let color8 = ".lkTBnJ > .PrivateSwitchBase-input";
let color9 = ".hrGTBD > .PrivateSwitchBase-input";
let color10 = ".cWSplh > .PrivateSwitchBase-input";
let color11 = ".lpoAjF > .PrivateSwitchBase-input";
let color12 = ".cvZEVi > .PrivateSwitchBase-input";

//url page
let inputURL = "ptaUrl";
let notificationURL = '//*[@id="ptaUrl-helper-text"]/span';

//account web form
let inputFirstName = "firstName";
let inputSecondName = "secondName";
let dropdnRole = "ptaRole";
let roleChair =
  "#menu-role > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-19k1qda > ul > li:nth-child(1)";
let inputEmail = "ptaEmail";
let inputPassword = "ptaPassword";
let inputRepeatPassword = "ptaRepeatPassword";

//package page
let starterPackage =
  '//*[@id="root"]/main/div/div/div[1]/div[2]/div[2]/div[2]/div/div[2]/button';
let proPackage =
  "#root > main > div > div > div.sc-cPiKLX.fqYvIo > div:nth-child(2) > div.sc-kdBSHD.iOGLpV > div:nth-child(1) > div > div.sc-hCPjZK.czJzWZ > button";

//final page
let messageSuccess = "#root > main > div > div > div > p.text";



let localStorageBranding = {
  signup:
    '{"location":"Australia","schoolDetails":{"ptaName":"PTA Name","schoolName":"School Name","address1":"Address1","address2":"Address2","town":"Town","county":"County","postCode":"02002","planTypeId":0},"brandingDetails":{"ptaBrandingColor":"","ptaUrl":""},"accountDetails":{"firstName":"","secondName":"","role":"","email":"","password":"","repeatPassword":""}}',
  _persist: '{"version":-1,"rehydrated":true}',
};
let localStorageOrganisationDetails = {
  signup:
    '{"location":"Australia","schoolDetails":{"ptaName":"","schoolName":"","address1":"","address2":"","town":"","county":"","postCode":"","planTypeId":0},"brandingDetails":{"ptaBrandingColor":"","ptaUrl":""},"accountDetails":{"firstName":"","secondName":"","role":"","email":"","password":"","repeatPassword":""}}',
  _persist: '{"version":-1,"rehydrated":true}',
};

let localStorageURL = {
  signup:
    '{"location":"Australia","schoolDetails":{"ptaName":"PTA Name","schoolName":"School Name","address1":"Address1","address2":"Address2","town":"Town","county":"County","postCode":"02002","planTypeId":0},"brandingDetails":{"ptaBrandingColor":"#4CAF50","ptaUrl":""},"accountDetails":{"firstName":"","secondName":"","role":"","email":"","password":"","repeatPassword":""}}',
  _persist: '{"version":-1,"rehydrated":true}',
};

let localStoragePackageWithPassword = {
  signup:
    '{"location":"Australia","schoolDetails":{"ptaName":"PTA Name","schoolName":"School Name","address1":"Address1","address2":"Address2","town":"Town","county":"County","postCode":"02002","planTypeId":0},"brandingDetails":{"ptaBrandingColor":"#4CAF50","ptaUrl":"www.pta-events.co.uk/ewr"},"accountDetails":{"firstName":"First Name","secondName":"Second Name","role":"Secretary","email":"iryna.rudakova@pta-events.co.uk","password":"!Asd123456","repeatPassword":"!Asd123456"}}',
  _persist: '{"version":-1,"rehydrated":true}',
};

let localStoragePackageWithPackage = {
  signup:
    '{"location":"Australia","schoolDetails":{"ptaName":"PTA Name","schoolName":"School Name","address1":"Address1","address2":"Address2","town":"Town","county":"County","postCode":"02002","planTypeId":1},"brandingDetails":{"ptaBrandingColor":"#4CAF50","ptaUrl":"www.pta-events.co.uk/ewr"},"accountDetails":{"firstName":"First Name","secondName":"Second Name","role":"Secretary","email":"iryna.rudakova@pta-events.co.uk","password":"!Asd123456","repeatPassword":"!Asd123456"}}',
  _persist: '{"version":-1,"rehydrated":true}',
};

async function localStorageAccount() {
  const ptaUrlValue = await generateRandomUrl();
  return {
    signup: `{
      "location": "Australia",
      "schoolDetails": {
        "ptaName": "PTA Name",
        "schoolName": "School Name",
        "address1": "Address1",
        "address2": "Address2",
        "town": "Town",
        "county": "County",
        "postCode": "02002",
        "planTypeId": 0
      },
      "brandingDetails": {
        "ptaBrandingColor": "#4CAF50",
        "ptaUrl": "${ptaUrlValue}"
      },
      "accountDetails": {
        "firstName": "",
        "secondName": "",
        "role": "",
        "email": "",
        "password": "",
        "repeatPassword": ""
      }
    }`,
    _persist: `{
      "version": -1,
      "rehydrated": true
    }`,
  };
}

module.exports = {
  clearLocalStorage,
  scrollToBottom,
  clickOnClickableElementByName,
  clickOnClickableElementByCss,
  generateRandomUrl,
  localStorageAccount,
  parseData,

  firstPageContinueButton,
  locationBtnEnglandWales,
  locationBtnScotland,
  locationBtnNorternIreland,
  locationBtnUSA,
  locationBtnNewZealand,
  locationBtnAustralia,
  locationBtnCanada,
  locationBtnIreland,
  
  btnContinue,
  starterPackage,
  inputPTAName,
  inputSchoolName,
  inputAddress1,
  inputAddress2,
  inputTown,
  inputCounty,
  inputPostCode,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  color10,
  color11,
  color12,
  inputURL,
  notificationURL,
  inputFirstName,
  inputSecondName,
  dropdnRole,
  roleChair,
  inputEmail,
  inputPassword,
  inputRepeatPassword,
  messageSuccess,
  proPackage,
  localStorageBranding,
  localStorageOrganisationDetails,
  localStorageURL,
  localStoragePackageWithPassword,
  localStoragePackageWithPackage,
};
