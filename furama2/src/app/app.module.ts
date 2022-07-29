import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FuramaServicePageComponent} from './furama-service/furama-service-page/furama-service-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FuramaServiceCreateComponent} from './furama-service/furama-service-create/furama-service-create.component';
import {CustomerPageComponent} from './customer/customer-page/customer-page.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {ContractPageComponent} from './contract/contract-page/contract-page.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import { ModalComponent } from './modal/modal.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    FuramaServicePageComponent,
    FuramaServiceCreateComponent,
    CustomerPageComponent,
    CustomerCreateComponent,
    ContractPageComponent,
    ContractCreateComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
