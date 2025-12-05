import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing-module';
import { Suggestions } from './suggestions';
import { SuggestionDetail } from './suggestion-detail/suggestion-detail';
import { SuggestionsListComponent } from './suggestions-list/suggestions-list';


@NgModule({
  declarations: [
    Suggestions,
    SuggestionDetail,
    SuggestionsListComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
