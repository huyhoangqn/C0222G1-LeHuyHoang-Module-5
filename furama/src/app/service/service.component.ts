import {Component, OnInit} from '@angular/core';
import {Contract} from "../contract/contract";
import {Service} from "./service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      name: 'Service 1',
      convenience: 'Wifi'
    },
    {
      id: 2,
      name: 'Service 2',
      convenience: 'Ti vi'
    },
    {
      id: 3,
      name: 'Service 3',
      convenience: 'Máy lạnh'
    },
    {
      id: 4,
      name: 'Service 4',
      convenience: 'Tủ lạnh'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
