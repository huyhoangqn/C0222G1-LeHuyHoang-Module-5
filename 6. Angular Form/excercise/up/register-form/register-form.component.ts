import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidator} from "./custom-validator";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
        age: new FormControl('', [Validators.required, this.checkAge18]),
        gender: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
      },
      CustomValidator.mustMatch('password', 'confirmPassword')
    );
  }

  submit() {
    console.log(this.registerForm);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  checkAge18(abs: AbstractControl): any {
    const sYear = abs.value.substr(0, 4);
    const curYear = new Date().getFullYear();
    return curYear - sYear >= 18 ? null : {not18: true};
  }
}

