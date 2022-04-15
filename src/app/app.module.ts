import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddNewExpensesComponent } from './expenses/add-new-expenses/add-new-expenses.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AllocationsComponent,
    ExpensesComponent,
    AddNewExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
