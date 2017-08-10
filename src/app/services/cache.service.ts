import { Injectable } from '@angular/core';
import {Response} from "@angular/http";

@Injectable()
export class CacheService {

  customerDetailseResponse: any;

  constructor() { }

  getCustomerDetailsFromCache() : Response{
    return this.customerDetailseResponse;
  }

  setCustomerDetailsInCache(customerDetails: Response){
    this.customerDetailseResponse = customerDetails;
  }

}
