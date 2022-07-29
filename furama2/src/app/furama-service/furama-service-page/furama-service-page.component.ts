import {Component, OnInit} from '@angular/core';
import {Service} from '../service';


@Component({
  selector: 'app-furama-service-page',
  templateUrl: './furama-service-page.component.html',
  styleUrls: ['./furama-service-page.component.css']
})
export class FuramaServicePageComponent implements OnInit {

  services: Service[] = [
    {
      code: 'S-001',
      name: 'Hoang',
      standard: 1,
      area: 200,
      poolArea: 200,
      numberOfFloor: 5,
      maxOfPeople: 5,
      description: 'ok',
      status: 'Hoạt động',
      cost: 3000,
      serviceType: 1,
      rentType: 1
    },
    {
      code: 'S-002',
      name: 'Hung',
      standard: 2,
      area: 200,
      poolArea: 200,
      numberOfFloor: 5,
      maxOfPeople: 5,
      description: 'ok',
      status: 'Không hoạt động',
      cost: 3000,
      serviceType: 2,
      rentType: 2
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
