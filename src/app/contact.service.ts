import {Injectable} from '@angular/core';

@Injectable()
export class ContactService{

  contactList: Array<object> = [
    {
       "_id":"5de91c005b98615393e74931",
       "index":0,
       "firstName":"Browningaa",
       "lastName":"Grahamaa",
       "company":"MELBACORAA",
       "email":"browninggrahamaaa@melbacoraa.com",
       "phone":"+1 (123) 585-2525",
       "address":"12345 Hastings Street, Roosevelt, Puerto Rico, 5573"
    },
    {
       "_id":"5de91c00d6b4d04e96ef44da",
       "index":1,
       "firstName":"Mcmahonbb",
       "lastName":"Fultonbb",
       "company":"ILLUMITYBB",
       "email":"mcmahonfultonbb@illumitybb.com",
       "phone":"+1 (12) 189-3373",
       "address":"12345 Bainbridge Street, Abrams, Mississippi, 2652"
    },
    {
       "_id":"5de91c007e02a7eb64124760",
       "index":2,
       "firstName":"Susancc",
       "lastName":"Dyercc",
       "company":"ZAGGLECC",
       "email":"susandyercc@zagglecc.com",
       "phone":"+1 (123) 847-2965",
       "address":"12345 Decatur Street, Waumandee, Nevada, 7107"
    },
    {
       "_id":"5de91c002229191af175899d",
       "index":3,
       "firstName":"Beckerdd",
       "lastName":"Gibsondd",
       "company":"SKINSERVEDD",
       "email":"beckergibsondd@skinservedd.com",
       "phone":"+1 (123) 166-2681",
       "address":"123 Banner Avenue, Wollochet, Federated States Of Micronesia, 2706"
    },
    {
       "_id":"5de91c000dd0867e858c4a8e",
       "index":4,
       "firstName":"Sparksee",
       "lastName":"Bullockee",
       "company":"COMBOGENEEE",
       "email":"sparksbullockee@combogene.com",
       "phone":"+1 (123) 345-2177",
       "address":"678 Chestnut Street, Waterview, Maryland, 12465"
    }
 ];

  GetContactList(){
    return this.contactList;
  }

}