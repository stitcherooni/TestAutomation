require("dotenv").config();

var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;
  var driver = new webdriver.Builder().forBrowser('chrome').build();
  driver.manage().setTimeouts({implicit: (10000)});

  
  class BasePage {

    
    constructor(){
     global.driver = driver;
     }

   

  // async initializeLocalStorage() {
  //     // Зберігаємо дані в localStorage
  //     await driver.executeScript(() => {
  //         for (const key in arguments[0]) {
  //             localStorage.setItem(key, JSON.stringify(arguments[0][key]));
  //         }
  //     }, this.localStorageData);
  // }

    async open (theURL) {
        return driver.get(theURL);
    }
}


module.exports = BasePage;