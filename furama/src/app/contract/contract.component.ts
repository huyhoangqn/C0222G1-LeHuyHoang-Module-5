import { Component, OnInit } from '@angular/core';
import {Contract} from "./contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts:Contract[] = [
    {
      id: 1,
      startDay: "2022-01-01",
      endDay: "2022-02-02",
      customer: "Nam",
      cost: "123456789",
    },
    {
      id: 2,
      startDay: "2022-01-01",
      endDay: "2022-02-02",
      customer: "Nam",
      cost: "123456789",
    },
    {
      id: 3,
      startDay: "2022-01-01",
      endDay: "2022-02-02",
      customer: "Nam",
      cost: "123456789",
    },
    {
      id: 4,
      startDay: "2022-01-01",
      endDay: "2022-02-02",
      customer: "Nam",
      cost: "123456789",
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
