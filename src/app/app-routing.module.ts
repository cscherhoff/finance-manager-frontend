import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocationsComponent } from 'src/app/allocations/allocations.component';
import { AddNewExpensesComponent } from './expenses/add-new-expenses/add-new-expenses.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InvestmentTransactionComponent } from './investment/investment-transaction/investment-transaction.component';
import {InvestmentDepotEntryComponent} from './investment/investment-depot-entry/investment-depot-entry.component';
import {InvestmentProfitComponent} from './investment/investment-profit/investment-profit.component';
import {AddNewTransactionComponent} from './investment/add-new-transaction/add-new-transaction.component';
import { InvestmentInformationComponent } from './investment/investment-information/investment-information.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'allocation', component: AllocationsComponent
  },
  {
    path: 'investment/transaction/newTransaction', component: AddNewTransactionComponent
  },
  {
    path: 'expenses', component: ExpensesComponent
  },
  {
    path: 'addNewExpense', component: AddNewExpensesComponent
  },
  {
    path: 'investment/transaction', component: InvestmentTransactionComponent
  },
  {
    path: 'investment/depotEntries', component: InvestmentDepotEntryComponent
  },
  {
    path: 'investment/profits', component: InvestmentProfitComponent
  },
  {
    path: 'investment/information', component: InvestmentInformationComponent
  },
  {
    path: '', redirectTo: 'addNewExpense', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
