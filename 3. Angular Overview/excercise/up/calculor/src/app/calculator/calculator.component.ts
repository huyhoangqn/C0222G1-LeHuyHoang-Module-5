import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  number3: number = 0

  constructor() {
  }

  add() {
    this.number3 = this.number1 + this.number2;
  }
  sub(){
    this.number3 = this.number1 - this.number2;
  }
  mul(){
    this.number3 = this.number1 * this.number2;
  }
  div(){
    this.number3 = this.number1 / this.number2;
  }

  ngOnInit(): void {
  }

}
