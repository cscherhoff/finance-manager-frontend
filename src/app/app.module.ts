import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { AddNewExpensesComponent } from './add-new-expenses/add-new-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    AllocationsComponent,
    AddNewExpensesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
