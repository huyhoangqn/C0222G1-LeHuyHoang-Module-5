import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket.service';
import {Ticket} from '../../model/ticket';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {
  ticketList: Ticket[];
  ticket: Ticket;
  id: number;
  totalLength: any;
  page = 1;
  amount: number;
  itemPerPage: 2;

  constructor(private ticketService: TicketService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.ticketService.fillAll(0).subscribe((value: any) => {
      this.ticketList = value.content;
      this.totalLength = value.length;
    }, error => {
      console.log(error);
    });
  }

  getInfo(item: Ticket) {
    this.id = item.id;
  }

  getPage(page) {
    this.page = page;
    page = page - 1;
    this.ticketService.fillAll(page).subscribe((value: any) => {
      this.ticketList = value.content;
      this.totalLength = value.content.length();
    });
  }

  deleteTicket(id: number) {
    this.ticketService.delete(id).subscribe(value => {
      this.ngOnInit();
      this.page = 1;
      this.router.navigateByUrl('');
      this.toastr.success('Delete completed!', 'Notification');
    }, error => {
      console.log(error);
    });
  }

  getInfoBook(item: Ticket) {
    this.ticket = item;
    this.amount = item.amount;
  }

  bookTicket(ticket: Ticket) {
    console.log(ticket);
    if (ticket.amount < 1) {
      this.toastr.error('Out off ticket!', 'Notification');
    } else {
      this.ticket.amount = ticket.amount - 1;
      this.ticketService.save(this.ticket).subscribe(value => {
        this.ngOnInit();
        this.page = 1;
        this.toastr.success('Book Success!', 'Notification');
      });
    }
  }
}
