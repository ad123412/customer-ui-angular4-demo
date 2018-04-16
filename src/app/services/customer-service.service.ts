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
    // http://52.230.125.171/digital-customerce-api/rest-experience/customer/details/%2B436641234567
//return this._http.get('http://52.187.12.31:8071/rest-experience/customer/details/' + dn);
    return this._http.get('http://13.90.141.254:8071/rest-experience/customer/details/' + dn);
      //.map(response => response.json());
  }
}
