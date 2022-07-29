import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TicketPageComponent} from './ticket/ticket-page/ticket-page.component';
import {TicketCreateComponent} from './ticket/ticket-create/ticket-create.component';
import {TicketEditComponent} from './ticket/ticket-edit/ticket-edit.component';


const routes: Routes = [{
  path: '',
  component: TicketPageComponent
},
  {
    path: 'ticket/create',
    component: TicketCreateComponent
  },
  {
    path: 'ticket/update/:id',
    component: TicketEditComponent
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
