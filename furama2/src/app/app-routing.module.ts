import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FuramaServicePageComponent} from './furama-service/furama-service-page/furama-service-page.component';
import {FuramaServiceCreateComponent} from './furama-service/furama-service-create/furama-service-create.component';
import {CustomerPageComponent} from './customer/customer-page/customer-page.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {ContractPageComponent} from './contract/contract-page/contract-page.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'service-list',
    component: FuramaServicePageComponent
  },
  {
    path: 'service-create',
    component: FuramaServiceCreateComponent
  },
  {
    path: 'customer-list',
    component: CustomerPageComponent
  },
  {
    path: 'customer-create',
    component: CustomerCreateComponent
  },
  {
    path: 'contract-list',
    component: ContractPageComponent
  },
  {
    path: 'contract-create',
    component: ContractCreateComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
