const { By, until } = require('selenium-webdriver');
const helper = require("../helper.js");
var BasePage = require('../lib/basepage.js')
const {
    clearLocalStorage,
    scrollToBottom,
  
  } = require("../helper.js");

class SchoolDetailPage extends BasePage {

   

  async enter_url(theURL) {
    await this.open(theURL);
  }

  async open_page() {
    //console.log('get url')
    await driver.get(process.env.URL);
    const localStorageOrganisationDetails =
      helper.localStorageOrganisationDetails;
     // console.log('execute script')
    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStorageOrganisationDetails
    );
    //console.log('refresh')
    await driver.navigate().refresh();
    //console.log('ewait')
    await driver.wait(
      until.urlContains(process.env.ORGANISATIONPAGE),
      Number(process.env.STANDARTDELAY)
    );
  }

  async enter_value(field,value){
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id(field))));
    await driver.findElement(By.id(field)).click();
    await driver
      .findElement(By.id(field))
      .sendKeys(value);
  }

  async get_field_notification(field){
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id(field))));
    return await driver.findElement(By.id(field)).getText();
   
  }

  async continue() {
    await scrollToBottom(driver);
    await driver.findElement(By.css(helper.btnContinue)).click();
  }

  async quit() {
    await driver.quit();
  }
}

module.exports = new SchoolDetailPage();
