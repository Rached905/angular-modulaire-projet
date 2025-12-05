import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Suggestions } from './suggestions';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list';
import { SuggestionDetail } from './suggestion-detail/suggestion-detail';

const routes: Routes = [
  { path: '', component: SuggestionsListComponent },
  { path: ':id', component: SuggestionDetail }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
