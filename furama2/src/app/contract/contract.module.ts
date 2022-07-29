import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractPageComponent } from './contract-page/contract-page.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ContractCreateComponent, ContractPageComponent, ContractDeleteComponent, ContractEditComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ContractModule { }
