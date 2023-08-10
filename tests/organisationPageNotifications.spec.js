const { Builder } = require('selenium-webdriver');
const schoolDetailPage = require('../lib/schooldetail'); 
const assert = require('assert');
const helper = require("../helper.js"); 

describe("Verify notification in case of entering", function () {
   // this.timeout(50000);
  
    before(async function () {
        
    });

    after(async function () {
      await schoolDetailPage.quit();
    });

    it("an empty all inputs", async function () {
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
    it("an empty PTA Name value", async function () {
        await schoolDetailPage.open_page();
        await schoolDetailPage.enter_value(helper.inputSchoolName,process.env.ORGANISATIONNAME);
        await schoolDetailPage.enter_value(helper.inputAddress1,process.env.ADDRESS1);
        await schoolDetailPage.enter_value(helper.inputAddress2,process.env.ADDRESS2);
        await schoolDetailPage.scrollToBottom();
        await schoolDetailPage.enter_value(helper.inputTown,process.env.TOWN);
        await schoolDetailPage.enter_value(helper.inputCounty,process.env.COUNTY);
        await schoolDetailPage.enter_value(helper.inputPostCode,process.env.POSTCODE);
        await schoolDetailPage.continue();
    
        assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationPTANAme)), "Required",'PTA Name has required notification');
        assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationSchoolNAme)).length==0, 'School Name doesn*t have notification'); 
        assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress1)).length==0, 'Address1  doesn*t have notification'); 
        assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress2)).length==0,'Address2 doesn*t have notification'); 
        assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationTown)).length==0,'Town doesn*t have notification'); 
        assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationCounty)).length==0,'County doesn*t have notification'); 
        assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPostCode)).length==0,'Postcode doesn*t have notification'); 
    }).timeout(90000);

    it("an empty School Name value", async function () {
      await schoolDetailPage.open_page();
      await schoolDetailPage.enter_value(helper.inputPTAName,process.env.PTANAME);
      await schoolDetailPage.enter_value(helper.inputAddress1,process.env.ADDRESS1);
      await schoolDetailPage.enter_value(helper.inputAddress2,process.env.ADDRESS2);
      await schoolDetailPage.scrollToBottom();
      await schoolDetailPage.enter_value(helper.inputTown,process.env.TOWN);
      await schoolDetailPage.enter_value(helper.inputCounty,process.env.COUNTY);
      await schoolDetailPage.enter_value(helper.inputPostCode,process.env.POSTCODE);
      await schoolDetailPage.continue();
  
      assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationSchoolNAme)), "Required",'School Name has required notification');
      assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPTANAme)).length==0, 'PTA Name doesn*t have notification'); 
      assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress1)).length==0, 'Address1  doesn*t have notification'); 
      assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress2)).length==0,'Address2 doesn*t have notification'); 
      assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationTown)).length==0,'Town doesn*t have notification'); 
      assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationCounty)).length==0,'County doesn*t have notification'); 
      assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPostCode)).length==0,'Postcode doesn*t have notification'); 
  }).timeout(90000);

  it("an empty Address1 value", async function () {
    await schoolDetailPage.open_page();
    await schoolDetailPage.enter_value(helper.inputPTAName,process.env.PTANAME);
    await schoolDetailPage.enter_value(helper.inputSchoolName,process.env.ORGANISATIONNAME);
    await schoolDetailPage.enter_value(helper.inputAddress2,process.env.ADDRESS2);
    await schoolDetailPage.scrollToBottom();
    await schoolDetailPage.enter_value(helper.inputTown,process.env.TOWN);
    await schoolDetailPage.enter_value(helper.inputCounty,process.env.COUNTY);
    await schoolDetailPage.enter_value(helper.inputPostCode,process.env.POSTCODE);
    await schoolDetailPage.continue();

    assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationAddress1)), "Required",'Adress1 Name has required notification');
    assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPTANAme)).length==0, 'PTA Name doesn*t have notification'); 
    assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationSchoolNAme)).length==0, 'School Name  doesn*t have notification'); 
    assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress2)).length==0,'Address2 doesn*t have notification'); 
    assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationTown)).length==0,'Town doesn*t have notification'); 
    assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationCounty)).length==0,'County doesn*t have notification'); 
    assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPostCode)).length==0,'Postcode doesn*t have notification'); 
}).timeout(90000);

it("an empty Address2 value", async function () {
  await schoolDetailPage.open_page();
  await schoolDetailPage.enter_value(helper.inputPTAName,process.env.PTANAME);
  await schoolDetailPage.enter_value(helper.inputSchoolName,process.env.ORGANISATIONNAME);
  await schoolDetailPage.enter_value(helper.inputAddress1,process.env.ADDRESS1);
  await schoolDetailPage.scrollToBottom();
  await schoolDetailPage.enter_value(helper.inputTown,process.env.TOWN);
  await schoolDetailPage.enter_value(helper.inputCounty,process.env.COUNTY);
  await schoolDetailPage.enter_value(helper.inputPostCode,process.env.POSTCODE);
  await schoolDetailPage.continue();

  assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationAddress2)), "Required",'Adress1 Name has required notification');
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPTANAme)).length==0, 'PTA Name doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationSchoolNAme)).length==0, 'School Name  doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress1)).length==0,'Address1 doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationTown)).length==0,'Town doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationCounty)).length==0,'County doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPostCode)).length==0,'Postcode doesn*t have notification'); 
}).timeout(90000);

it("an empty Town value", async function () {
  await schoolDetailPage.open_page();
  await schoolDetailPage.enter_value(helper.inputPTAName,process.env.PTANAME);
  await schoolDetailPage.enter_value(helper.inputSchoolName,process.env.ORGANISATIONNAME);
  await schoolDetailPage.enter_value(helper.inputAddress1,process.env.ADDRESS1);
  await schoolDetailPage.scrollToBottom();
  await schoolDetailPage.enter_value(helper.inputAddress2,process.env.ADDRESS2);
  await schoolDetailPage.enter_value(helper.inputCounty,process.env.COUNTY);
  await schoolDetailPage.enter_value(helper.inputPostCode,process.env.POSTCODE);
  await schoolDetailPage.continue();

  assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationTown)), "Required",'Town Name has required notification');
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPTANAme)).length==0, 'PTA Name doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationSchoolNAme)).length==0, 'School Name  doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress1)).length==0,'Address1 doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress2)).length==0,'Town doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationCounty)).length==0,'County doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPostCode)).length==0,'Postcode doesn*t have notification'); 
}).timeout(90000);

it("an empty County value", async function () {
  await schoolDetailPage.open_page();
  await schoolDetailPage.enter_value(helper.inputPTAName,process.env.PTANAME);
  await schoolDetailPage.enter_value(helper.inputSchoolName,process.env.ORGANISATIONNAME);
  await schoolDetailPage.enter_value(helper.inputAddress1,process.env.ADDRESS1);
  await schoolDetailPage.scrollToBottom();
  await schoolDetailPage.enter_value(helper.inputAddress2,process.env.ADDRESS2);
  await schoolDetailPage.enter_value(helper.inputTown,process.env.TOWN);
  await schoolDetailPage.enter_value(helper.inputPostCode,process.env.POSTCODE);
  await schoolDetailPage.continue();

  assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationCounty)), "Required",'County Name has required notification');
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPTANAme)).length==0, 'PTA Name doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationSchoolNAme)).length==0, 'School Name  doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress1)).length==0,'Address1 doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress2)).length==0,'Town doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationTown)).length==0,'County doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPostCode)).length==0,'Postcode doesn*t have notification'); 
}).timeout(90000);

it("an empty Postcode value", async function () {
  await schoolDetailPage.open_page();
  await schoolDetailPage.enter_value(helper.inputPTAName,process.env.PTANAME);
  await schoolDetailPage.enter_value(helper.inputSchoolName,process.env.ORGANISATIONNAME);
  await schoolDetailPage.enter_value(helper.inputAddress1,process.env.ADDRESS1);
  await schoolDetailPage.scrollToBottom();
  await schoolDetailPage.enter_value(helper.inputAddress2,process.env.ADDRESS2);
  await schoolDetailPage.enter_value(helper.inputTown,process.env.TOWN);
  await schoolDetailPage.enter_value(helper.inputCounty,process.env.COUNTY);
  await schoolDetailPage.continue();

  assert.strictEqual((await schoolDetailPage.get_field_notification(helper.notificationPostCode)), "Required",'PostCode Name has required notification');
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationPTANAme)).length==0, 'PTA Name doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationSchoolNAme)).length==0, 'School Name  doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress1)).length==0,'Address1 doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationAddress2)).length==0,'Town doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationTown)).length==0,'County doesn*t have notification'); 
  assert.ok((await schoolDetailPage.elements_isLocated(helper.notificationCounty)).length==0,'Postcode doesn*t have notification'); 
}).timeout(90000);
});