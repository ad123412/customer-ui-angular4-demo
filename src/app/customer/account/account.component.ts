import { Component, OnInit } from '@angular/core';
import {DnSubjectService} from "../../services/dn-subject.service";
import {Response} from "@angular/http";
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  customerDetailsResponse: Response;

  constructor(private _dnSubjectService: DnSubjectService,
              private _cacheService: CacheService) { }

  ngOnInit() {

    this.extractResponse(this._cacheService.getCustomerDetailsFromCache());
  }

  extractResponse(response){

    console.log("extracting the response in AccountComponent from cache >>> ");
    this.customerDetailsResponse = response;
  }

}
