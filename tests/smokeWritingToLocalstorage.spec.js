const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
const { clearLocalStorage } = require("../helper.js");

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
    // Очистимо localStorage перед кожним тестом
    await clearLocalStorage(driver);
  });

  it("should redirect to /branding when using dataToStore1", async function () {
    const dataToStore1 = {
      
        signup: "{\"location\":\"Australia\",\"schoolDetails\":{\"ptaName\":\"PTA Name\",\"schoolName\":\"School Name\",\"address1\":\"Address1\",\"address2\":\"Address2\",\"town\":\"Town\",\"county\":\"County\",\"postCode\":\"02002\",\"planTypeId\":0},\"brandingDetails\":{\"ptaBrandingColor\":\"\",\"ptaUrl\":\"\"},\"accountDetails\":{\"firstName\":\"\",\"secondName\":\"\",\"role\":\"\",\"email\":\"\",\"password\":\"\",\"repeatPassword\":\"\"}}",
        _persist: "{\"version\":-1,\"rehydrated\":true}"
    };
    

    // Записати об'єкт у localStorage
    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      dataToStore1
    );
    const storedData = await driver.executeScript(
      `return JSON.parse(localStorage.getItem("persist:pta-events"))`
    );
    console.log(storedData)

    // Перезавантажити сторінку
    await driver.navigate().refresh();

    const storedData1 = await driver.executeScript(
      `return JSON.parse(localStorage.getItem("persist:pta-events"))`
    );
    console.log(storedData1)

    // Почекати, поки сторінка завантажиться
    await driver.wait(until.urlContains("/branding"), 5000);

    // Перевірити, що користувач перенаправлено на правильну сторінку
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.includes("/branding"));
  });

  // it.skip("should redirect to Page B when using dataToStore2", async function () {
  //   const dataToStore2 = {
  //     // Додайте відповідні дані для dataToStore2
  //   };

  //   // Записати об'єкт у localStorage
  //   await driver.executeScript(
  //     `localStorage.setItem("data", JSON.stringify(arguments[0]))`,
  //     dataToStore2
  //   );

  //   // Перезавантажити сторінку
  //   await driver.navigate().refresh();

  //   // Почекати, поки сторінка завантажиться
  //   await driver.wait(until.urlContains("pageB"), 5000);

  //   // Перевірити, що користувач перенаправлено на правильну сторінку
  //   const currentURL = await driver.getCurrentUrl();
  //   assert.ok(currentURL.includes("pageB"));
  // });
});
