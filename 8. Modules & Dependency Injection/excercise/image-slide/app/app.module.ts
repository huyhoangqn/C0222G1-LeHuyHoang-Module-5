import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PhotoCreateComponent} from './photo/photo-create/photo-create.component';
import {PhotoDetailComponent} from './photo/photo-detail/photo-detail.component';
import {PhotoDeleteComponent} from './photo/photo-delete/photo-delete.component';
import {PhotoListComponent} from './photo/photo-list/photo-list.component';
import {PhotoEditComponent} from './photo/photo-edit/photo-edit.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PhotoCreateComponent,
    PhotoDetailComponent,
    PhotoDeleteComponent,
    PhotoListComponent,
    PhotoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
