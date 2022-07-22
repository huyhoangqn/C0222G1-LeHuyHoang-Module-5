import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: Dictionary[] = [{
    id: 1,
    word: 'free',
    mean: 'miễn phí, tự do',
    type : 'Adjective '
  }];

  constructor() {
  }

  getAll() {
    return this.dictionarys;
  }

  findById(id: number) {
    return this.dictionarys.find(word => word.id === id);
  }
}
