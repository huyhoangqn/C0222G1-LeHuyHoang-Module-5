import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  customers: Customer[];
  // customers: Customer[] = [
  //   {
  //     code: '001',
  //     name: 'Hoang',
  //     birthday: '2022-02-02',
  //     idCard: '123456789',
  //     email: 'huyhoang@gmail.com',
  //     gender: 1,
  //     phone: '123456789',
  //     address: 'Hà Nội',
  //     typeCustomer: 1
  //   },
  //   {
  //     code: '002',
  //     name: 'Hung',
  //     birthday: '2022-02-02',
  //     idCard: '123456789',
  //     email: 'hung@gmail.com',
  //     gender: 0,
  //     phone: '123456789',
  //     address: 'Hà Nội',
  //     typeCustomer: 2
  //   }
  // ];

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(result => {
        this.customers = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCustomer(customerId: string) {
    console.log(customerId);
    this.customerService.delete(customerId).subscribe(value => {
      // this.getAll();
      this.router.navigateByUrl('/customer-list');
      alert('Xóa thành công');
    }, error => {
      console.log(error);
    });
  }
}
