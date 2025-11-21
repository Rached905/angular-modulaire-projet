import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { ListSuggestions } from './core/list-suggestions/list-suggestions';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ListSuggestions
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
