import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm:FormGroup;
  subscription:Subscription;
  customer: Customer;
  typeCustomerList:string[]=[];

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.customerService.getAllTypeCustomer().subscribe(
      data => this.typeCustomerList = data
    );
    let idCustomer = this.activatedRoute.snapshot.params.idCustomer;
    this.subscription = this.customerService.findById(Number(idCustomer)).subscribe(
      (data) => {
        this.customer = data;
      },(error)=>{
        console.log(error)
      },() =>{
        this.customerForm = new FormGroup({
          id: new FormControl(this.customer.id),
          code: new FormControl(this.customer.code, [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
          name: new FormControl(this.customer.name, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
          birthday: new FormControl(this.customer.birthday, [Validators.required]),
          idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
          email: new FormControl(this.customer.email, [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
          gender: new FormControl(this.customer.gender, [Validators.required]),
          phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[0-9]{7}$')]),
          address: new FormControl(this.customer.address, [Validators.required]),
          typeCustomer: new FormControl(this.customer.typeCustomer['name'], [Validators.required])
        });
      }
    );

  }

  ngOnInit(): void {
  }

  submit() {
    this.customer = this.customerForm.value;

    this.customerService.update(this.customer).subscribe(
    );
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
