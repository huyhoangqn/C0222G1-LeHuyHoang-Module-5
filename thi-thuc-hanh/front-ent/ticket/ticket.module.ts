import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';


@NgModule({
  declarations: [TicketPageComponent, TicketEditComponent, TicketCreateComponent],
  imports: [
    CommonModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
