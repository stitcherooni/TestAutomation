const assert = require("assert");
const helper = require("../helper.js");
const { clearLocalStorage,
  scrollToBottom } = require("../helper.js");
const webdriver = require("selenium-webdriver");
const { elementIsDisabled } = require("selenium-webdriver/lib/until.js");
const { By, until } = webdriver;

describe("Verify Button Countinue becames enabled after", function () {
  beforeEach(async function () {
    driver = await new webdriver.Builder().forBrowser("chrome").build();
    await driver.get(process.env.URL);
    const localStorageOrganisationDetails =
      helper.localStorageBranding;

    await driver.executeScript(
      `localStorage.setItem("persist:pta-events", JSON.stringify(arguments[0]))`,
      localStorageOrganisationDetails
    );

    await driver.navigate().refresh();
    await driver.wait(until.urlContains("/branding"), 10000);
    await driver.wait(until.titleIs(process.env.PAGETITLE), 10000);
    await driver.manage().setTimeouts({ implicit: 10000 });
  });

  afterEach(async function () {
    await clearLocalStorage(driver);
    await driver.quit();
  });

  it(" click on 'peachy' colour1 button", async function () {

    
    const button = await driver.findElement(By.css(helper.btnContinue));
    await driver.wait(until.elementIsVisible(button));
    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let colour = await driver.findElement(
      By.css(helper.color1)
    );

    await colour.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'red' colour2 button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));
    await driver.wait(until.elementIsVisible(button));
    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let colour = await driver.findElement(
      By.css(helper.color2)
    );

    await colour.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

  it(" click on 'Dark Orchid' colour3 button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));
    await driver.wait(until.elementIsVisible(button));
    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let colour = await driver.findElement(
      By.css(helper.color3)
    );

    await colour.click();

    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
  });

    it(" click on 'Purple' colour4 button", async function () {

      const button = await driver.findElement(By.css(helper.btnContinue));
      await driver.wait(until.elementIsVisible(button));
      assert(
        (await button.isEnabled()) === false,
        "Button should be disabled before clicking"
      );
  
      let colour = await driver.findElement(
        By.css(helper.color4)
      );
      await driver.wait(until.elementIsVisible(colour));
      await colour.click();
      
      await driver.wait(until.elementIsEnabled(button));
      assert(
        (await button.isEnabled()) === true,
        "Button should be disabled before clicking"
      );
  });
    

      it(" click on 'Blue' colour5 button", async function () {

        const button = await driver.findElement(By.css(helper.btnContinue));
        await driver.wait(until.elementIsVisible(button));
        assert(
          (await button.isEnabled()) === false,
          "Button should be disabled before clicking"
        );
    
        let colour = await driver.findElement(
          By.css(helper.color5)
        );
        await driver.wait(until.elementIsVisible(colour));
        await colour.click();
        
        await driver.wait(until.elementIsEnabled(button));
        assert(
          (await button.isEnabled()) === true,
          "Button should be disabled before clicking"
        );
  });

  it(" click on ' Light Blue' colour6 button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));
    await driver.wait(until.elementIsVisible(button));
    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );

    let colour = await driver.findElement(
      By.css(helper.color6)
    );
    await driver.wait(until.elementIsVisible(colour));
    await colour.click();
    
    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
});

it(" click on ' Sky Blue' colour7 button", async function () {

  const button = await driver.findElement(By.css(helper.btnContinue));
  await driver.wait(until.elementIsVisible(button));
  assert(
    (await button.isEnabled()) === false,
    "Button should be disabled before clicking"
  );

  let colour = await driver.findElement(
    By.css(helper.color7)
  );
  await driver.wait(until.elementIsVisible(colour));
  await colour.click();
  
  await driver.wait(until.elementIsEnabled(button));
  assert(
    (await button.isEnabled()) === true,
    "Button should be disabled before clicking"
  );
}); 


  it(" click on ' Iris Blue' colour8 button", async function () {

    const button = await driver.findElement(By.css(helper.btnContinue));
    await driver.wait(until.elementIsVisible(button));
    assert(
      (await button.isEnabled()) === false,
      "Button should be disabled before clicking"
    );
  
    let colour = await driver.findElement(
      By.css(helper.color8)
    );
    await driver.wait(until.elementIsVisible(colour));
    await colour.click();
    
    await driver.wait(until.elementIsEnabled(button));
    assert(
      (await button.isEnabled()) === true,
      "Button should be disabled before clicking"
    );
});

it(" click on 'Dark Cyan' colour9 button", async function () {

  const button = await driver.findElement(By.css(helper.btnContinue));
  await driver.wait(until.elementIsVisible(button));
  assert(
    (await button.isEnabled()) === false,
    "Button should be disabled before clicking"
  );

  let colour = await driver.findElement(
    By.css(helper.color9)
  );
  await driver.wait(until.elementIsVisible(colour));
  await colour.click();
  
  await driver.wait(until.elementIsEnabled(button));
  assert(
    (await button.isEnabled()) === true,
    "Button should be disabled before clicking"
  );
});

it(" click on 'Light Green' colour10 button", async function () {

  const button = await driver.findElement(By.css(helper.btnContinue));
  await driver.wait(until.elementIsVisible(button));
  assert(
    (await button.isEnabled()) === false,
    "Button should be disabled before clicking"
  );

  let colour = await driver.findElement(
    By.css(helper.color10)
  );
  await driver.wait(until.elementIsVisible(colour));
  await colour.click();
  
  await driver.wait(until.elementIsEnabled(button));
  assert(
    (await button.isEnabled()) === true,
    "Button should be disabled before clicking"
  );
});

it(" click on ' Yellow' colour11 button", async function () {

  const button = await driver.findElement(By.css(helper.btnContinue));
  await driver.wait(until.elementIsVisible(button));
  assert(
    (await button.isEnabled()) === false,
    "Button should be disabled before clicking"
  );

  let colour = await driver.findElement(
    By.css(helper.color11)
  );
  await driver.wait(until.elementIsVisible(colour));
  await colour.click();
  
  await driver.wait(until.elementIsEnabled(button));
  assert(
    (await button.isEnabled()) === true,
    "Button should be disabled before clicking"
  );
});
  

it(" click on 'Matterhorn' colour12 button", async function () {

  const button = await driver.findElement(By.css(helper.btnContinue));
  await driver.wait(until.elementIsVisible(button));
  assert(
    (await button.isEnabled()) === false,
    "Button should be disabled before clicking"
  );

  let colour = await driver.findElement(
    By.css(helper.color12)
  );
  await driver.wait(until.elementIsVisible(colour));
  await colour.click();
  
  await driver.wait(until.elementIsEnabled(button));
  assert(
    (await button.isEnabled()) === true,
    "Button should be disabled before clicking"
  );
});
});
