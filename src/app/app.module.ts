import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {CustomerServiceService} from './services/customer-service.service';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule} from '@angular/forms';
import {DnSubjectService} from "./services/dn-subject.service";
import {RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './customer/contact/contact.component';
import { AccountComponent } from './customer/account/account.component';
import { CreditComponent } from './customer/credit/credit.component';
import {CacheService} from "./services/cache.service";

const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'account', component: AccountComponent},
  {path: 'credit', component: CreditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ContactComponent,
    AccountComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CustomerServiceService,
    DnSubjectService,
    CacheService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
