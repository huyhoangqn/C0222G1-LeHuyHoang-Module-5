import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {ContractComponent} from "./contract/contract.component";
import {ServiceComponent} from "./service/service.component";
import {HomeComponent} from "./home/home.component";
import {ServiceEditComponent} from "./service/service-edit/service-edit.component";


const routes: Routes = [
  {
    path: 'contract-list',
    component: ContractComponent
  },
  {
    path: 'service-list',
    component: ServiceComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'service-edit',
    component:ServiceEditComponent
  }
]

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
