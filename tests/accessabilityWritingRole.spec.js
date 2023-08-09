require("dotenv").config();
const assert = require("assert/strict");
const helper = require("../helper.js");
const {
  clearLocalStorage,
  scrollToBottom,
  parseData,
  localStorageAccount
} = require("../helper.js");
var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

describe("The chosed role is accessable and has been writed to local storage for the role ", async function () {
  beforeEach(async function () {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
    await driver.get(process.env.URL);
    const dataStorageAccount = await localStorageAccount();

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      dataStorageAccount
    );

    await driver.navigate().refresh();

    await driver.wait(until.urlContains("/account"), 5000);
    await driver.wait(until.elementLocated(By.css('form')))
    await driver.findElement(By.id(helper.inputFirstName)).click();
    await driver
      .findElement(By.id(helper.inputFirstName))
      .sendKeys(process.env.FIRSTNAME);
    await driver.findElement(By.id(helper.inputSecondName)).click();
    await driver
      .findElement(By.id(helper.inputSecondName))
      .sendKeys(process.env.SECONDNAME);

    
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
  });

  afterEach(async function () {
    // await clearLocalStorage(driver);
    // await driver.quit();
  });

  it.only(" Secretary", async function () {
  
  //  await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))
  
 // {
  await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))
  await driver.findElement(By.id(helper.dropdnRole)).click();

  await driver.manage().setTimeouts({ implicit: 500 });
  //  await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
  //}
  //{
    //const element1 = await driver.findElement(By.css(".Mui-focusVisible"))
  //  await driver.actions({ bridge: true }).moveToElement(element).release().perform()
  //}
  // await driver.findElement(By.css("body")).click()
  // await driver.manage().setTimeouts({ implicit: 500 });
  await driver.findElement(By.id("Secretary")).click()






  
//     await driver.manage().setTimeouts({ implicit: 500 });
// await driver.wait(until.elementLocated(By.id(helper.roleSecretary))).click()
 
  //.click();
  // await driver.findElement(By.value("Secretary")).click()
    
    await driver.findElement(By.css(helper.btnContinue)).click();
  
    // let localStData = await parseData();
    
    // assert.ok(localStData.accountDetails.role == 'Secretary',
    //   "Role value Secretary should be added to localstorage"
    // );
  
  });

  it("Chair", async function () {
  
    await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))

    await driver.findElement(By.id(helper.dropdnRole)).click();

    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.findElement(By.css(helper.roleChair)).click();
    
    await driver.findElement(By.css(helper.btnContinue)).click();

    let localStData = await parseData();
    
    assert.ok(localStData.accountDetails.role == 'Chair',
      "Role value Chair should be added to localstorage"
    );
  });

    it(" Vice Chair", async function () {
  
      await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))
      await driver.findElement(By.id(helper.dropdnRole)).click();
  
      await driver.manage().setTimeouts({ implicit: 500 });
      await driver.findElement(By.css(helper.roleViceChair)).click();
      
      await driver.findElement(By.css(helper.btnContinue)).click();
  
      let localStData = await parseData();
      
      assert.ok(localStData.accountDetails.role == 'Vice Chair',
        "Role value Vice Chair should be added to localstorage"
      );
    
  });
  it(" School Admin", async function () {
  
    await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))

    await driver.findElement(By.id(helper.dropdnRole)).click();

    await driver.manage().setTimeouts({ implicit: 500 });
    await driver.findElement(By.css(helper.roleSchoolAdmin)).click();
    
    await driver.findElement(By.css(helper.btnContinue)).click();

    let localStData = await parseData();
    
    assert.ok(localStData.accountDetails.role == 'School Admin',
      "Role value School Admin should be added to localstorage"
    );
  
});it(" Treasurer", async function () {
  
  await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))

  await driver.findElement(By.id(helper.dropdnRole)).click();

  await driver.manage().setTimeouts({ implicit: 500 });
  await driver.findElement(By.css(helper.roleTreasurer)).click();
  
  await driver.findElement(By.css(helper.btnContinue)).click();

  let localStData = await parseData();
  
  assert.ok(localStData.accountDetails.role == 'Treasurer',
    "Role value  Treasurer should be added to localstorage"
  );

});

it(" Headteacher", async function () {
  
  await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))

  await driver.findElement(By.id(helper.dropdnRole)).click();

  await driver.manage().setTimeouts({ implicit: 500 });
  await driver.findElement(By.css(helper.roleOther)).click();
  
  await driver.findElement(By.css(helper.btnContinue)).click();

  let localStData = await parseData();
  
  assert.ok(localStData.accountDetails.role == 'Headteacher',
    "Role value Headteacher should be added to localstorage"
  );

});
it(" Other", async function () {
  
  await driver.wait(until.elementLocated(By.id(helper.dropdnRole)))

  await driver.findElement(By.id(helper.dropdnRole)).click();

  await driver.manage().setTimeouts({ implicit: 500 });
  await driver.findElement(By.css(helper.roleOther)).click();
  
  await driver.findElement(By.css(helper.btnContinue)).click();

  let localStData = await parseData();
  
  assert.ok(localStData.accountDetails.role == 'Other',
    "Role value Other should be added to localstorage"
  );

});


}); //{ browsers: [Browser.CHROME, Browser.FIREFOX]}
