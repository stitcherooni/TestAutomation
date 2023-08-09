const { Builder } = require('selenium-webdriver');
const schoolDetailPage = require('../lib/schooldetail'); // Підключаємо ваш пейдж-об'єкт
const assert = require('assert');
const helper = require("../helper.js"); // Імпортуємо вашу утилітну бібліотеку

describe("Verify notification in case of entering", function () {
    this.timeout(50000);
    let driver;
    // let schooldetail;

    before(async function () {
        
    });

    after(async function () {
      await schoolDetailPage.quit();
    });

    it("an empty PTA Name value", async function () {
        await schoolDetailPage.open_page();
        await schoolDetailPage.continue();
    
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationPTANAme)), "Required"); 
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationSchoolNAme)), "Required");
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationAddress1 )), "Required");
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationAddress2 )), "Required");
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationTown)), "Required");
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationCounty)), "Required");
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationPostCode)), "Required");
    });
    // it("an empty PTA Name value", async function () {
    //     await schoolDetailPage.open_page();
    //     await schoolDetailPage.enter_value();
    //     await schoolDetailPage.continue();
    
    //     assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationPTANAme)), "Required"); 
    // });
});