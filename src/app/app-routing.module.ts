import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocationsComponent } from 'src/app/allocations/allocations.component';
import { AddNewExpensesComponent } from './expenses/add-new-expenses/add-new-expenses.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  {
    path: 'allocation', component: AllocationsComponent
  },
  // {
  //   path: 'updateAllocation', component: UpdateAllocationsComponent
  // },
  {
    path: 'expenses', component: ExpensesComponent
  },
  {
    path: 'addNewExpense', component: AddNewExpensesComponent
  },
  // {
  //   path: 'categories', component: CategoriesComponent
  // },
  // {
  //   path: 'depotEntries', component: DepotEntriesComponent
  // },
  {
    path: '', redirectTo: 'allocation', pathMatch: 'full'
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
