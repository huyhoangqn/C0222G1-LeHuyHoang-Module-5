import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TicketPageComponent} from './ticket/ticket-page/ticket-page.component';
import {TicketEditComponent} from './ticket/ticket-edit/ticket-edit.component';
import {TicketCreateComponent} from './ticket/ticket-create/ticket-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TicketPageComponent,
    TicketEditComponent,
    TicketCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, ToastrModule.forRoot({
            timeOut: 2000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right',
        }),
        NgxPaginationModule, FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
