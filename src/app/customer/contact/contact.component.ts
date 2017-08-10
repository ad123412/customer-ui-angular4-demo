import { Component, OnInit } from '@angular/core';
import {DnSubjectService} from "../../services/dn-subject.service";
import {Response} from "@angular/http";
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  customerDetailsResponse: any;
  contacts: any[];

  email: string;
  address: string;
  primaryTelNo: string;
  secondaryTelNo:string;

  constructor(private _dnSubjectService: DnSubjectService,
              private _cacheService: CacheService) { }

  ngOnInit() {

    this.extractResponse(this._cacheService.getCustomerDetailsFromCache());
  }

  extractResponse(response){

    console.log("extracting the response in ContactComponent from cache >>> ");
    this.customerDetailsResponse = response;
    this.contacts = this.customerDetailsResponse.contact.contactMedium;

    for(let contact of this.contacts){
      if(contact.type === 'Email'){
        this.handleEmail(contact.medium);
      }else if(contact.type === 'PostalAddress'){
        this.handlePostalAddress(contact.medium);
      }else if(contact.type === 'TelephoneNumber'){
        this.handleTelephoneNumbers(contact.medium, contact.preferred);
      }
    }
  }

  handleEmail(medium: any){
    this.email = medium.emailAddress;
  }

  handlePostalAddress(medium: any){
    this.address = medium.street1 + " " + medium.stateOrProvince + " " +
      medium.postcode + " " + medium.city + ", " + medium.country;
  }

  handleTelephoneNumbers(medium: any,preferred: boolean){
    if(preferred){
      this.primaryTelNo = medium.number;
    }else{
      this.secondaryTelNo = medium.number;
    }
  }


}
