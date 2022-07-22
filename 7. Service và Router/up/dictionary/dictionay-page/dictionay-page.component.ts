import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Dictionary} from '../model/dictionary';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  dictionarys: Dictionary[];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionarys = this.dictionaryService.getAll();
  }

}
