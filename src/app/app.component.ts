import {Component} from '@angular/core';
import {DnSubjectService} from "./services/dn-subject.service";
import {CustomerServiceService} from "./services/customer-service.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dnSubjectService: DnSubjectService,
              private _customerService: CustomerServiceService){}

  dn: string;

  searchDn(){
    console.log("dn to be searched >> " + this.dn);
    this.getCustomerDetails(this.dn);

  }

  getCustomerDetails(dn: string){

    console.log("before calling customer details ... ");
    this._customerService.getCustomerDetails(dn)
      .subscribe(
        (response:Response) => {
          console.log(response);
          this.pushCustomerInformation(response);
        },
        (error: Response) => {
          console.log("error occurred while calling customer details >> " + error);
          //this._dnSubjectService.getDnUpdateSubject().error(error);
          this.pushCustomerInformation(error);
        }
      );
  }

  pushCustomerInformation(response){
    console.log("pushing .... response");
    this._dnSubjectService.getDnUpdateSubject().next(response);
  }

}
