import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from '../services/customer-service.service';
import {Response} from "@angular/http";
import {DnSubjectService} from "../services/dn-subject.service";
import {Router} from "@angular/router";
import {CacheService} from "../services/cache.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerName: string;
  customerId: string;
  showCustomerTabs: boolean = false;
  customerDetailsResponse: any;
  isErrorOccurredInCustomerDetails: boolean = false;
  errorText: string;

  constructor(private _customerService: CustomerServiceService,
              private _dnSubjectService: DnSubjectService,
              private _router: Router,
              private _cacheService: CacheService) { }

  ngOnInit() {

    this._dnSubjectService.getDnUpdateSubject()
      .subscribe(
        (response: Response) => {
          console.log("Inside customer component ..." + response);

          if(response.status === 200){

            this.extractResponse(response.json());
            this.isErrorOccurredInCustomerDetails = false;
          }else{

            this.manageErrorResponse(response);
          }
        },
        (error: Response) => {
          console.log("Error occurred .... " + error);
          this.manageErrorResponse(error);
        }
      );
  }

  extractResponse(response){

    this.isErrorOccurredInCustomerDetails = false;
    this.customerName = response.name;
    this.customerId = response.id;
    this.customerDetailsResponse = response;
    this._cacheService.setCustomerDetailsInCache(response);
    this.showCustomerTabs = false;
  }

  manageErrorResponse(error){

    this.isErrorOccurredInCustomerDetails = true;
    this._cacheService.setCustomerDetailsInCache(error);
    if(error.status === 404){
      this.errorText = "No data found with this dn ... ";
    }else{
      this.errorText = "Something went wrong while calling the service ... ";
    }
    this.showCustomerTabs = false;
  }

  manageCustomerDetailsTabs(){

    this.showCustomerTabs = !this.showCustomerTabs;
    if(this.showCustomerTabs){
      this._router.navigate(['/contact']);
    }
  }

  isCustomerDetailsCallSuccessful(){

    // let showCustomerInfo = false;
    // console.log("customerid>> " + this.customerId);
    // console.log("isErrorOccurredInCustomerDetails>> " + this.isErrorOccurredInCustomerDetails);
    // if(this.customerId &&
    //   !this.isErrorOccurredInCustomerDetails){
    //
    //   showCustomerInfo = true;
    // }
    // console.log("showCustomerInfo >> " + showCustomerInfo);
    // return showCustomerInfo;

    if(this.customerId){
      return true;
    }
    return false;
  }

}
