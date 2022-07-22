import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;

  ngOnInit() {
    this.customerForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      gender: new FormControl('Male', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
      address: new FormControl('', [Validators.required]),
      typeCustomer: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.log(this.customerForm);
  }


  get code() {
    return this.customerForm.get('code');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get typeCustomer() {
    return this.customerForm.get('typeCustomer');
  }
}
