import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionayPageComponent} from './dictionay-page/dictionay-page.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DictionaryDetailComponent
  },
  {
    path: 'dictionary-list',
    component: DictionayPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
