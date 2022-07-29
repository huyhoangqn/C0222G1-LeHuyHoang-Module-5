import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.contractForm = new FormGroup(
      {
        contractCode: new FormControl('', Validators.required),
        employeeCode: new FormControl('', Validators.required),
        customerCode: new FormControl('', Validators.required),
        serviceCode: new FormControl('', Validators.required),
        contractDate: new FormControl('', Validators.required),
        endDate: new FormControl('', Validators.required),
        deposit: new FormControl('', Validators.required),
        totalPayment: new FormControl('', Validators.required),
      }
    );
  }

  submit() {
    console.log(this.contractForm);
  }

  get contractCode() {
    return this.contractForm.get('contractCode');
  }
  get employeeCode() {
    return this.contractForm.get('employeeCode');
  }
  get customerCode() {
    return this.contractForm.get('customerCode');
  }
  get serviceCode() {
    return this.contractForm.get('serviceCode');
  }
  get contractDate() {
    return this.contractForm.get('contractDate');
  }
  get endDate() {
    return this.contractForm.get('endDate');
  }
  get deposit() {
    return this.contractForm.get('deposit');
  }
  get totalPayment() {
    return this.contractForm.get('totalPayment');
  }
}

