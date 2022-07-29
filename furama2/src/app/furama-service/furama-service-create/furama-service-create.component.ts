import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-furama-service-create',
  templateUrl: './furama-service-create.component.html',
  styleUrls: ['./furama-service-create.component.css']
})
export class FuramaServiceCreateComponent implements OnInit {
  serviceForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.serviceForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^DV-[0-9]{4}$')]),
      name: new FormControl('', [Validators.required]),
      standard: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      poolArea: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfFloor: new FormControl('', [Validators.required, Validators.min(1)]),
      maxOfPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      description: new FormControl(''),
      status: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      serviceType: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.log(this.serviceForm);
  }

  get code() {
    return this.serviceForm.get('code');
  }

  get name() {
    return this.serviceForm.get('name');
  }

  get standard() {
    return this.serviceForm.get('standard');
  }

  get area() {
    return this.serviceForm.get('area');
  }

  get poolArea() {
    return this.serviceForm.get('poolArea');
  }

  get numberOfFloor() {
    return this.serviceForm.get('numberOfFloor');
  }

  get maxOfPeople() {
    return this.serviceForm.get('maxOfPeople');
  }

  get status() {
    return this.serviceForm.get('status');
  }

  get cost() {
    return this.serviceForm.get('cost');
  }

  get serviceType() {
    return this.serviceForm.get('serviceType');
  }

  get rentType() {
    return this.serviceForm.get('rentType');
  }
}
