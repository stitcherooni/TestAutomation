
import { URLSearchParams } from 'url';
import { JsonRequest } from 'http-req-builder';
import { components } from '../../.temp/types'
import 'dotenv/config';


export class Onbording{
    async sendEmail(emailAddress: string) {
      console.log(process.env.URL+'Onboarding/sendemail')
        return (await new JsonRequest()
            .url( process.env.URL+'Onboarding/sendemail')
            .method('post')
            .searchParams(new URLSearchParams({ emailAddress }))
            .send()
            )
            //.body;
    }
    async url(url:string) {
      let urlToCheck:components['schemas']['CheckUrlRequest']={
        url,
       "ptaName": "ptaName API test",
       "town": "Town Name API"
   }
        return (await new JsonRequest()
            .url('https://ptaonboarding.azurewebsites.net/api/url')
            .method('post')
            .body(urlToCheck)
            .send())
            //.body;
    }

    async organisation(url:string) {
        let schoolDetails1:components['schemas']['SchoolDetailsDTO'] ={
              "schoolPtaname": "School PTA Name API",
              "schoolName": "School Name API",
              "schoolAddress1": "School Address1 API",
              "schoolAddress2": "School Address2 API",
              "schoolTown": "School Town API",
              "schoolCounty": "Bristol",
              "schoolPostCode": "School Postcode API",
              "planTypeId": 1
            };
        let schoolBrandingDetails1:components['schemas']['SchoolBrandingDetailsDTO'] = {
              "url": `${url}`,
              "ptaBrandingColor": "#9C27B0"
            };
        let accountDetails1:components['schemas']['AccountDetailsDTO']={
              "customerFirstName": "Iryna",
              "customerLastName": "QA",
              "role": "Chair",
              "customerEmail": "iryna.rudakova@pta-events.co.uk",
              "customerPassword": "!Asd123456"
            }
          
         let orgaisationToCreate={ 
          schoolDetails:{ ...schoolDetails1},
          schoolBrandingDetails:{ ...schoolBrandingDetails1},
          accountDetails:{ ...accountDetails1}
         }
          
        let request = (await new JsonRequest()
            .url('https://ptaonboarding.azurewebsites.net/api/organisation')
            .method('post')
            .body(orgaisationToCreate)
            .send()
            )
            
            return request
    }
 
}