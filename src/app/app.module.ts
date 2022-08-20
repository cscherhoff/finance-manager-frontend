import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddNewExpensesComponent } from './expenses/add-new-expenses/add-new-expenses.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { InvestmentTransactionComponent } from './investment/investment-transaction/investment-transaction.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentDepotEntryComponent } from './investment/investment-depot-entry/investment-depot-entry.component';
import { InvestmentProfitComponent } from './investment/investment-profit/investment-profit.component';
import { AddNewTransactionComponent } from './investment/add-new-transaction/add-new-transaction.component';
import { DatePipe } from '@angular/common';
import { InvestmentInformationComponent } from './investment/investment-information/investment-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AllocationsComponent,
    ExpensesComponent,
    AddNewExpensesComponent,
    InvestmentTransactionComponent,
    InvestmentComponent,
    InvestmentDepotEntryComponent,
    InvestmentProfitComponent,
    AddNewTransactionComponent,
    InvestmentInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
