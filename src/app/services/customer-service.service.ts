import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerServiceService {

  constructor(private _http: Http) { }

  getCustomerDetails(dn: string){

    // %2B436641234567
    // http://localhost:3000/customer
    // 'http://localhost:30011/customer/contact/' + dn
    return this._http.get('http://localhost:30011/customer/contact/' + dn);
      //.map(response => response.json());
  }
}
