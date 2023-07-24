import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

import {AppComponent} from './app.component';
import {CardComponent} from './utils/card/card.component';
import {OneComponent} from './assignments/one/one.component';
import {WarningAlertComponent} from './assignments/one/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './assignments/one/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    OneComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    NgHeroiconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
