const { Builder } = require('selenium-webdriver');
const accountDetailPage = require('../lib/accountdetail'); 
const helper = require("../helper.js"); 
const chai = require('chai');
const assert = chai.assert;



describe("Verify notification in case of entering", function () {
   // this.timeout(50000);
  
    before(async function () {
        
    });

    after(async function () {
     // await accountDetailPage.quit();
    });

    it("non valid symbols to all inputs", async function () {
      await accountDetailPage.open_page();
      await accountDetailPage.enter_value(helper.inputFirstName,'асд');
      await accountDetailPage.enter_value(helper.inputSecondName,'асд');
      await accountDetailPage.enter_value(helper.inputEmail,'асд');
      await accountDetailPage.choose_role()
      await accountDetailPage.scrollToBottom();
      await accountDetailPage.enter_value(helper.inputPassword,'асд');
      await accountDetailPage.enter_value(helper.inputRepeatPassword,'асд');
      await accountDetailPage.continue();
    
        assert.include((await accountDetailPage.get_field_notification(helper.notificationFN)),helper.notificationValidation); 
        assert.include((await accountDetailPage.get_field_notification(helper.notificationSN)),helper.notificationValidation);
        assert.include((await accountDetailPage.get_field_notification(helper.notificationEmail )), helper.notificationMatchEmail);
        
    });

    it("more than then allowed maximum symbols to all inputs", async function () {
      await accountDetailPage.open_page();
      await accountDetailPage.enter_value(helper.inputFirstName,'gypjcekvaxmappwkdecsowxuhkmwerufrhdafldhcjxsevkzxzleornskcemgfgmvxpxksajznkesarhyzodmvdjx');
      await accountDetailPage.enter_value(helper.inputSecondName,'gypjcekvaxmappwkdecsowxuhkmwerufrhdafldhcjxsevkzxzleornskcemgfgmvxpxksajznkesarhyzodmvdjx');
      await accountDetailPage.enter_value(helper.inputEmail,'gypjcekvaxmppwkdecsowxuhkmwerufrhdafldhcjxsevkzxzle@ornskcemgfgmvxpxksajznkesarhyzodmvdjxenpbeijpldtqiydlgmnyxffzycttgbftdzsleqqqvnifioigjifubmwunisxtthxhzakcqatlfutboscdvigqwwkdqydpnpssmaqfaiaclaypyootwrugdstesjdzhlstkrkiyjabobwjviapqpkyiiibyzfpk.co');
      await accountDetailPage.choose_role()
      await accountDetailPage.scrollToBottom();
      await accountDetailPage.enter_value(helper.inputPassword,'!A1jcekvaxmappwkdecsowxuhkmwerufrhdafldhcjxsevkzxzleornskcemgfgmvxpxksajznkesarhyzodmvdjx');
      await accountDetailPage.enter_value(helper.inputRepeatPassword,'!A1jcekvaxmappwkdecsowxuhkmwerufrhdafldhcjxsevkzxzleornskcemgfgmvxpxksajznkesarhyzodmvdjx');
      await accountDetailPage.continue();
  
        assert.include((await accountDetailPage.get_field_notification(helper.notificationFN)),helper.notificationMax50); 
        assert.include((await accountDetailPage.get_field_notification(helper.notificationSN)),helper.notificationMax50);
        assert.include((await accountDetailPage.get_field_notification(helper.notificationEmail )), helper.notificationMatchEmail);
        assert.include((await accountDetailPage.get_field_notification(helper.notificationPWD )), helper.notificationVerPWD);

    });
    
    
});