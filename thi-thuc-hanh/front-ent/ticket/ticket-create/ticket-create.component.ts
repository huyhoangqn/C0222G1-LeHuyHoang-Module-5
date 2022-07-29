import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../../service/ticket.service';
import {Provider} from '../../model/provider';
import {Ticket} from '../../model/ticket';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  ticketForm: FormGroup;
  provider: Provider[];
  ticket: Ticket;

  constructor(private ticketService: TicketService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.ticketForm = new FormGroup({
      id: new FormControl(),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      fromPlace: new FormControl('', Validators.required),
      toPlace: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
      provider: new FormControl('', Validators.required)
    });
    this.ticketService.fillAllProvider().subscribe(value => {
      this.provider = value;
      console.log(value);
    }, error => {
      console.log(error);
    });
  }

  createTicket() {
    this.ticket = this.ticketForm.value;
    console.log(this.ticket);
    this.ticketService.createTicket(this.ticket).subscribe(value => {
      this.router.navigateByUrl('/');
      this.toastr.success('Add completed!', 'Notification');
    }, error => {
      console.log(error);
    });
  }

  get price() {
    return this.ticketForm.get('price');
  }

  get from() {
    return this.ticketForm.get('fromPlace');
  }

  get to() {
    return this.ticketForm.get('toPlace');
  }

  get day() {
    return this.ticketForm.get('day');
  }

  get time() {
    return this.ticketForm.get('time');
  }

  get amount() {
    return this.ticketForm.get('amount');
  }

  get providerForm() {
    return this.ticketForm.get('provider');
  }
}
