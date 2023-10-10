const { Builder } = require('selenium-webdriver');
const accountDetailPage = require('../lib/accountdetail'); 
const assert = require('assert');
const helper = require("../helper.js"); 

describe("Verify  Account Page notifications in case of entering", function () {
   // this.timeout(50000);
  
    before(async function () {
        
    });

    after(async function () {
     await accountDetailPage.quit();
    });

    it("an empty all inputs", async function () {
        await accountDetailPage.open_page();
        await accountDetailPage.scrollToBottom();
        await accountDetailPage.continue();
    
        assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationFN)), "Required"); 
        assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationSN)), "Required");
        assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationEmail )), "Required");
        assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationPWD )), "Required");
        assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationRptPWD)), "Required");
    });
    it("an empty First Name value", async function () {
        await accountDetailPage.open_page();
        await accountDetailPage.enter_value(helper.inputSecondName,process.env.SECONDNAME);
        await accountDetailPage.choose_role()
        await accountDetailPage.scrollToBottom();
        await accountDetailPage.enter_value(helper.inputEmail,process.env.EMAIL);
        await accountDetailPage.enter_value(helper.inputPassword,process.env.PASSWORD);
        await accountDetailPage.enter_value(helper.inputRepeatPassword,process.env.PASSWORD);
        await accountDetailPage.continue();
    
        assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationFN)), "Required",'First Name has required notification');
        assert.ok((await accountDetailPage.elements_isLocated(helper.notificationSN)).length==0, 'Second Name doesn*t have notification'); 
        assert.ok((await accountDetailPage.elements_isLocated(helper.notificationEmail)).length==0, 'Email  doesn*t have notification'); 
        assert.ok((await accountDetailPage.elements_isLocated(helper.notificationPWD)).length==0,'Password doesn*t have notification'); 
        assert.ok((await accountDetailPage.elements_isLocated(helper.notificationRptPWD)).length==0,'Repeat Password doesn*t have notification'); 
    }).timeout(90000);

    it("an empty Second Name value", async function () {
      await accountDetailPage.open_page();
      await accountDetailPage.enter_value(helper.inputFirstName,process.env.FIRSTNAME);
      await accountDetailPage.choose_role()
      await accountDetailPage.scrollToBottom();
      await accountDetailPage.enter_value(helper.inputEmail,process.env.EMAIL);
      await accountDetailPage.enter_value(helper.inputPassword,process.env.PASSWORD);
      await accountDetailPage.enter_value(helper.inputRepeatPassword,process.env.PASSWORD);
      await accountDetailPage.continue();
  
      assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationSN)), "Required",'Second Name has required notification');
      assert.ok((await accountDetailPage.elements_isLocated(helper.notificationFN)).length==0, 'First Name doesn*t have notification'); 
      assert.ok((await accountDetailPage.elements_isLocated(helper.notificationEmail)).length==0, 'Email  doesn*t have notification'); 
      assert.ok((await accountDetailPage.elements_isLocated(helper.notificationPWD)).length==0,'Password doesn*t have notification'); 
      assert.ok((await accountDetailPage.elements_isLocated(helper.notificationRptPWD)).length==0,'repeat Password doesn*t have notification'); 
  }).timeout(90000);

  it("an empty Role value", async function () {
    await accountDetailPage.open_page();
    await accountDetailPage.enter_value(helper.inputFirstName,process.env.FIRSTNAME);
    await accountDetailPage.enter_value(helper.inputSecondName,process.env.SECONDNAME);
    await accountDetailPage.scrollToBottom();
    await accountDetailPage.enter_value(helper.inputEmail,process.env.EMAIL);
    await accountDetailPage.enter_value(helper.inputPassword,process.env.PASSWORD);
    await accountDetailPage.enter_value(helper.inputRepeatPassword,process.env.PASSWORD);
    await accountDetailPage.continue();

   
    assert.ok((await accountDetailPage.elements_isLocated(helper.notificationFN)).length==0, 'First Name doesn*t have notification'); 
    assert.ok((await accountDetailPage.elements_isLocated(helper.notificationSN)).length==0, 'Second Name doesn*t have notification'); 
    assert.ok((await accountDetailPage.elements_isLocated(helper.notificationEmail)).length==0, 'Email  doesn*t have notification'); 
    assert.ok((await accountDetailPage.elements_isLocated(helper.notificationPWD)).length==0,'Password doesn*t have notification'); 
    assert.ok((await accountDetailPage.elements_isLocated(helper.notificationRptPWD)).length==0,'Repeat Password doesn*t have notification'); 
}).timeout(90000);

it("an empty Email value", async function () {
  await accountDetailPage.open_page();
  await accountDetailPage.enter_value(helper.inputFirstName,process.env.FIRSTNAME);
  await accountDetailPage.enter_value(helper.inputSecondName,process.env.SECONDNAME);
  await accountDetailPage.choose_role()
  await accountDetailPage.scrollToBottom();
  await accountDetailPage.enter_value(helper.inputPassword,process.env.PASSWORD);
  await accountDetailPage.enter_value(helper.inputRepeatPassword,process.env.PASSWORD);
  await accountDetailPage.continue();

 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationFN)).length==0, 'First Name doesn*t have notification'); 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationSN)).length==0, 'Second Name doesn*t have notification'); 
  
  assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationEmail)), "Required",'Email has required notification');
  
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationPWD)).length==0,'Password doesn*t have notification'); 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationRptPWD)).length==0,'Repeat Password doesn*t have notification'); 
}).timeout(90000);

it("an empty Password value", async function () {
  await accountDetailPage.open_page();
  await accountDetailPage.enter_value(helper.inputFirstName,process.env.FIRSTNAME);
  await accountDetailPage.enter_value(helper.inputSecondName,process.env.SECONDNAME);
  await accountDetailPage.choose_role()
  await accountDetailPage.scrollToBottom();
  await accountDetailPage.enter_value(helper.inputEmail,process.env.EMAIL);
  await accountDetailPage.enter_value(helper.inputRepeatPassword,process.env.PASSWORD);
  await accountDetailPage.continue();

 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationFN)).length==0, 'First Name doesn*t have notification'); 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationSN)).length==0, 'Second Name doesn*t have notification'); 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationEmail)).length==0,'Email doesn*t have notification');
  assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationPWD)), "Required",'Password has required notification');
  assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationRptPWD)), helper.notificationMatchPWD,' Repeat Password has required notification');
}).timeout(90000);

it("an empty Repeat Password value", async function () {
  await accountDetailPage.open_page();
  await accountDetailPage.enter_value(helper.inputFirstName,process.env.FIRSTNAME);
  await accountDetailPage.enter_value(helper.inputSecondName,process.env.SECONDNAME);
  await accountDetailPage.choose_role()
  await accountDetailPage.scrollToBottom();
  await accountDetailPage.enter_value(helper.inputEmail,process.env.EMAIL);
  await accountDetailPage.enter_value(helper.inputPassword,process.env.PASSWORD);
  await accountDetailPage.continue();

 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationFN)).length==0, 'First Name doesn*t have notification'); 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationSN)).length==0, 'Second Name doesn*t have notification'); 
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationEmail)).length==0,'Email doesn*t have notification');
  assert.ok((await accountDetailPage.elements_isLocated(helper.notificationPWD)).length==0,'Password doesn*t have notification');
  assert.strictEqual((await accountDetailPage.get_field_notification(helper.notificationRptPWD)), "Required",'repeat Password has required notification');
  
}).timeout(90000);


});