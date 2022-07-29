import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
    this.customerForm = new FormGroup({
      customerId: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      customerName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      customerGender: new FormControl(0, [Validators.required]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
      customerAddress: new FormControl('', [Validators.required]),
      customerType: new FormGroup({
        customerTypeId: new FormControl(0, [Validators.required]),
        customerTypeName: new FormControl()
      })
    });
  }

  submit() {
    this.customer = this.customerForm.value;
    console.log(this.customer);
    this.customerService.createCustomer(this.customer).subscribe(value => {
      alert('add complete');
      this.router.navigateByUrl('/customer-list');
    }, error => {
      console.log(error);
    });
  }

  get customerId() {
    return this.customerForm.get('customerId');
  }

  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerForm.get('customerBirthday');
  }

  get customerIdCard() {
    return this.customerForm.get('customerIdCard');
  }

  get customerEmail() {
    return this.customerForm.get('customerEmail');
  }

  get customerGender() {
    return this.customerForm.get('customerGender');
  }

  get customerPhone() {
    return this.customerForm.get('customerPhone');
  }

  get customerAddress() {
    return this.customerForm.get('customerAddress');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  get customerTypeId() {
    return this.customerForm.get('customerTypeId');
  }
}
