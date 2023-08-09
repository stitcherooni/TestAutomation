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
let locationBtnEnglandWales ='[data-name="England & Wales"]';

let locationBtnScotland = '[data-name="Scotland"]';

let locationBtnNorternIreland = '[data-name="Northern Ireland"]';

let locationBtnUSA = '[data-name="USA"]';

let locationBtnNewZealand = '[data-name="New Zealand"]';

let locationBtnAustralia = '[data-name="Australia"]';

let locationBtnCanada = '[data-name="Canada"]';

let locationBtnIreland = '[data-name="Ireland"]';

let btnContinueLocation ="#root > main > div > div > div.sc-cPiKLX.fqYvIo > div:nth-child(2) > button";

  

//organisation web form
let inputPTAName = "ptaName";
let notificationPTANAme = "ptaName-helper-text";
let inputSchoolName = "schoolName";
let notificationSchoolNAme = "schoolName-helper-text";
let inputAddress1 = "address1";
let notificationAddress1 = "address1-helper-text";
let inputAddress2 = "address2";
let notificationAddress2 = "address2-helper-text";
let inputTown = "town";
let notificationTown = "town-helper-text";
let inputCounty = "county";
let notificationCounty = "county-helper-text";
let inputPostCode = "postCode";
let notificationPostCode = "postCode-helper-text";
let btnContinue = ".sc-eqUAAy";

//color page
let color1 = '[background="#FF7B5E"]'; //Peachy Pinky
let color2 =  '[background="#F30000"]';//red
let color3 = '[background="#9C27B0"]';//Dark Orchid
let color4 = '[background="#673AB7"]';//purple
let color5 = '[background="#3F51B5"]';//blue
let color6 = '[background="#2196F3"]';//light blue
let color7 = '[background="#03A9F4"]';//sky blue
let color8 = '[background="#00BCD4"]';//iris blue
let color9 = '[background="#009688"]';//dark cyan
let color10 = '[background="#4CAF50"]';//light green
let color11 = '[background="#FFC107"]';//yellow
let color12 = '[background="#4F4F4F"]';//Matterhorn

//url page
let inputURL = "ptaUrl";
let notificationURL = '//*[@id="ptaUrl-helper-text"]/span';

//account web form
let inputFirstName = "firstName";
let inputSecondName = "secondName";
let dropdnRole = "ptaRole";
let roleListBox = "[role='listbox']"
let roleChair ="[data-value='Chair']"
let roleViceChair ="[data-value='Vice Chair']"
let roleTreasurer ="[data-value='Treasurer']"
let roleSecretary="[data-value='Secretary']"
let roleHeadteacher ="[data-value='Headteacher']"
let roleSchoolAdmin="[data-value='School Admin']"
let roleOther ="[data-value='Other']"
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

  
  inputPTAName,
  inputSchoolName,
  inputAddress1,
  inputAddress2,
  inputTown,
  inputCounty,
  inputPostCode,
  notificationPTANAme,
  notificationSchoolNAme,
  notificationAddress1,
  notificationAddress2,
  notificationTown,
  notificationCounty,
  notificationPostCode,

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
  roleListBox,
  roleChair,
  roleViceChair,
  roleTreasurer,
  roleHeadteacher,
  roleOther,
  roleSchoolAdmin,
  roleSchoolAdmin,
  roleSecretary,
  inputEmail,
  inputPassword,
  inputRepeatPassword,
  messageSuccess,
  proPackage,
  starterPackage,
  localStorageBranding,
  localStorageOrganisationDetails,
  localStorageURL,
  localStoragePackageWithPassword,
  localStoragePackageWithPackage
};
