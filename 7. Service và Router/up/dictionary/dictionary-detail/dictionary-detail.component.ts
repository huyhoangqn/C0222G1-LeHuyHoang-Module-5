import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionaryForm: FormGroup;
  id: number;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      const word = this.getWord(this.id);
      console.log(word);
      this.dictionaryForm = new FormGroup({
        id: new FormControl(word.id),
        word: new FormControl(word.word),
        mean: new FormControl(word.mean),
        type : new FormControl(word.type ),
      });
    });
  }

  getWord(id: number) {
    return this.dictionaryService.findById(id);
  }
}
