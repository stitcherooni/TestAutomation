const { Builder } = require('selenium-webdriver');
const schoolDetailPage = require('../lib/schooldetail'); 
//const assert = require('assert');
const helper = require("../helper.js"); 
const chai = require('chai');
const assert = chai.assert;



describe("Verify notification in case of entering", function () {
   // this.timeout(50000);
  
    before(async function () {
        
    });

    after(async function () {
      await schoolDetailPage.quit();
    });

    it("non valid symbols to all inputs", async function () {
      await schoolDetailPage.open_page();
      await schoolDetailPage.enter_value(helper.inputPTAName,'асд');
      await schoolDetailPage.enter_value(helper.inputSchoolName,'асд');
      await schoolDetailPage.enter_value(helper.inputAddress1,'асд');
      await schoolDetailPage.enter_value(helper.inputAddress2,'асд');
      await schoolDetailPage.scrollToBottom();
      await schoolDetailPage.enter_value(helper.inputTown,'асд');
      await schoolDetailPage.enter_value(helper.inputCounty,'асд');
      await schoolDetailPage.enter_value(helper.inputPostCode,'асд');
      await schoolDetailPage.continue();
    
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationPTANAme)),helper.notificationPTA); 
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationSchoolNAme)),helper.notificationValidation);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationAddress1 )), helper.notificationValidation);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationAddress2 )), helper.notificationValidation);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationTown)), helper.notificationValidation);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationCounty)), helper.notificationValidation);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationPostCode)), helper.notificationValidation);
    });

    it("more than then allowed maximum symbols to all inputs", async function () {
      await schoolDetailPage.open_page();
      //250 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputPTAName,'gypjcekvaxmappwkdecsowxuhkmwerufrhdafldhcjxsevkzxzlexornskcemgfgmvxpxksajznkesarhyzodmvdjxenpbeijpldtqiydlgmnyxffzycttgbftdzsleqqqvnifioigjifubmwunisxtthxhzakcqatlfutboscdvigqwwkdqydpnpssmaqfaiaclaypyootwrugdstesjdzhlstkrkiyjabobwjviapqpkyiiibyzfpkaxkilfrrrmrwtsmtbrmsjggvettybxcedcjawsfmgxhfzislayxtrehurnwgdgsvfwmfktaaxmmyfpvywqkszsrfzalwxhpujaaavwrbkwgvlfmstgfpqmqemryqgaaluolqujtficbnuy');
      //250 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputSchoolName,'gypjcekvaxmappwkdecsowxuhkmwerufrhdafldhcjxsevkzxzlexornskcemgfgmvxpxksajznkesarhyzodmvdjxenpbeijpldtqiydlgmnyxffzycttgbftdzsleqqqvnifioigjifubmwunisxtthxhzakcqatlfutboscdvigqwwkdqydpnpssmaqfaiaclaypyootwrugdstesjdzhlstkrkiyjabobwjviapqpkyiiibyzfpkaxkilfrrrmrwtsmtbrmsjggvettybxcedcjawsfmgxhfzislayxtrehurnwgdgsvfwmfktaaxmmyfpvywqkszsrfzalwxhpujaaavwrbkwgvlfmstgfpqmqemryqgaaluolqujtficbnuy');
     //100 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputAddress1,'vftxwbwvbydxujcyhjuxleegwobdnccldkzerxwdtgmroegzingipzldeloegpcbvpljumrsikpmhlijgqmlvtraklpitbmqjnxucvpfvaxiyemfqxipntrsgvhht');
      //100 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputAddress2,'vftxwbwvbydxujcyhjuxleegwobdnccldkzerxwdtgmroegzingipzldeloegpcbvpljumrsikpmhlijgqmlvtraklpitbmqjnxucvpfvaxiyemfqxipntrsgvhht');
      await schoolDetailPage.scrollToBottom();
      //100 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputTown,'vftxwbwvbydxujcyhjuxleegwobdnccldkzerxwdtgmroegzingipzldeloegpcbvpljumrsikpmhlijgqmlvtraklpitbmqjnxucvpfvaxiyemfqxipntrsgvhht');
      //100 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputCounty,'vftxwbwvbydxujcyhjuxleegwobdnccldkzerxwdtgmroegzingipzldeloegpcbvpljumrsikpmhlijgqmlvtraklpitbmqjnxucvpfvaxiyemfqxipntrsgvhht');
      //100 symbols the maximum
      await schoolDetailPage.enter_value(helper.inputPostCode,'vftxwbwvbydxujcyhjuxleegwobdnccldkzerxwdtgmroegzingipzldeloegpcbvpljumrsikpmhlijgqmlvtraklpitbmqjnxucvpfvaxiyemfqxipntrsgvhht');
      await schoolDetailPage.continue();
    
        console.log(helper.notificationPTANAme)
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationPTANAme)),helper.notificationMaxPTAName); 
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationSchoolNAme)),helper.notificationMaxPTAName);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationAddress1 )), helper.notificationMax);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationAddress2 )), helper.notificationMax);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationTown)), helper.notificationMax);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationCounty)), helper.notificationMax);
        assert.include((await schoolDetailPage.get_field_notification(helper.notificationPostCode)), helper.notificationMax);
    });
    
    
});