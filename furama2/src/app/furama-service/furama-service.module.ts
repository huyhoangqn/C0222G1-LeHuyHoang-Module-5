import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FuramaServiceDeleteComponent} from './furama-service-delete/furama-service-delete.component';
import {FuramaServiceEditComponent} from './furama-service-edit/furama-service-edit.component';
import {FuramaServicePageComponent} from './furama-service-page/furama-service-page.component';
import {FuramaServiceCreateComponent} from './furama-service-create/furama-service-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [FuramaServiceDeleteComponent, FuramaServiceEditComponent, FuramaServicePageComponent, FuramaServiceCreateComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ]
})
export class FuramaServiceModule {
}
