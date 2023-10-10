const { By, until } = require('selenium-webdriver');
const helper = require("../helper.js");
var BasePage = require('./basepage.js')
const {
  localStorageAccount,
    clearLocalStorage,
    scrollToBottom,
  
  } = require("../helper.js");

class AccountDetailPage extends BasePage {

   

  async enter_url(theURL) {
    await this.open(theURL);
  }

  async open_page() {
    await driver.get(process.env.URL);
    const localStorageAccountDetails =
    await localStorageAccount();
    
    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStorageAccountDetails
    );
    
    await driver.navigate().refresh();
    
    await driver.wait(
      until.urlContains(process.env.ACCOUNTPAGE),
      Number(process.env.STANDARTDELAY)
    );
  }

  async choose_role(){
    const element = await driver.findElement(By.id(helper.dropdnRole));

    await driver.findElement(By.id(helper.dropdnRole)).click();

    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.findElement(By.css(helper.roleChair)).click();
  }

  async enter_value(field,value){
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id(field))));
    await driver.findElement(By.id(field)).click();
    await driver
      .findElement(By.id(field))
      .sendKeys(value);
  }

  async find_element(el){
    await driver.findElement(By.id(el))
  }

  async element_isDisplayed (el){
    return await driver.findElement(By.id(el)).isDisplayed();
  }

  async elements_isLocated (el){
    return await driver.findElements(By.id(el));
  }

  async get_field_notification(field){
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id(field))));
    return await driver.findElement(By.id(field)).getText();
   
  }

  async scrollToBottom(){
    await scrollToBottom(driver);
  }
  
  async continue() {
    await scrollToBottom(driver);
    await driver.findElement(By.css(helper.btnContinue)).click();
  }

  async quit() {
    await driver.manage().setTimeouts({ implicit: 3000 });
    await driver.quit();
  }
}

module.exports = new AccountDetailPage();
