import {Component, OnInit} from '@angular/core';
import {Contract} from '../contract';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {
  contracts: Contract[] = [
    {
      contractCode: '001',
      employeeCode: '002',
      customerCode: '003',
      serviceCode: '004',
      contractDate: '2022-02-02',
      endDate: '2023-03-03',
      deposit: 3000,
      totalPayment: 6000
    },
    {
      contractCode: '002',
      employeeCode: '001',
      customerCode: '002',
      serviceCode: '003',
      contractDate: '2022-02-02',
      endDate: '2023-03-03',
      deposit: 3000,
      totalPayment: 6000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
