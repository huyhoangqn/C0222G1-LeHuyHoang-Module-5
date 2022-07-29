import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ticket} from '../../model/ticket';
import {Provider} from '../../model/provider';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
  ticketForm: FormGroup;
  ticket: Ticket;
  provider: Provider[];

  constructor(private ticketService: TicketService, private activatedRoute: ActivatedRoute, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.ticketService.findById(id).subscribe(value => {
      this.ticket = value;
      console.log(value);
      this.ticketForm.patchValue(this.ticket);
    });
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
    });
  }

  compareByID(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
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

  updateTicket() {
    const ticketObj = this.ticketForm.value;
    ticketObj.id = this.ticket.id;
    console.log(ticketObj);
    this.ticketService.save(ticketObj).subscribe(value => {
      this.router.navigateByUrl('/');
      this.toastr.success('Edit completed!', 'Notification');
    }, error => {
      console.log(error);
    });
  }
}
