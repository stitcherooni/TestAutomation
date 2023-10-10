import { strict as assert } from 'assert'
import { Onbording } from '../api/controller/onboarding.controller'
import { generateRandomUrl } from '../api/controller/helper';
// import { load } from 'ts-dotenv';

// const env = load({
//     URL:String,
//     EMAIL:String
// });

const onboarding = new Onbording()

describe('Onboarding', () => {
    it('can re-send email', async function () {
        let email = 'iryna.rudakova@pta-events.co.uk'
        
        const responce = await onboarding.sendEmail(email);
         assert(responce.statusCode==200, `Endpoint Onboaring SendEmail expacted 200 but got ${responce.statusCode}`)
         assert(responce.body,`Email sent successfully to: ${email}`)
        
    })
    it('can check url as unique', async function () {
        let url = generateRandomUrl()
        const responce = await onboarding.url(url);
        assert(responce.statusCode==200, `Endpoint Onboaring url expacted 200 but got ${responce.statusCode}`)
        assert.deepEqual(responce.body.urls,[ 'pat', 'ptanameapitest', 'ptanameapitesttownnameapi' ],`Proposed urls expected  'pat', 'ptanameapitest', 'ptanameapitesttownnameapi', but got  ${responce.body.urls}`)
        
    })
    it('can check url dublicates', async function () {
        let url = generateRandomUrl()
        const responce = await onboarding.url('123213');
        assert(responce.statusCode==200, `Endpoint Onboaring url expacted 200 but got ${responce.statusCode}`)
        assert(responce.body.isValid==false, `Endpoint Onboaring url duplicate detected`)
        
    })
    it.only('can create organisation succesfully', async function () {
    
        let url = generateRandomUrl()
        const responce = await onboarding.organisation(url);
        assert(responce.statusCode==200, `Endpoint Onboaring url expacted 200 but got ${responce.statusCode}`)
        assert.deepEqual(responce.body,{"message": "Organisation onboarded successfully"},`Onboarding organisation creation message expected  {"message": "Organisation onboarded successfully"}, but got  ${responce.body}`)
        
    })
    it('fails to create organisation with existing url', async function () {
        try {
        const responce = await onboarding.organisation('123213');
        assert(responce.statusCode==200, `Endpoint Onboaring url expacted 200 but got ${responce.statusCode}`)
        assert.deepEqual(responce.body,{"message": "Organisation onboarded successfully"},`Onboarding organisation creation message expected  {"message": "Organisation onboarded successfully"}, but got  ${responce.body}`)
        
        }catch (error){ 
        }
       
    })
})
