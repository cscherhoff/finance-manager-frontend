import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Expense } from '../data/Expense';
import { EXPENSE_MOCK } from '../mockData/mock-expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  getExpenses(): Expense[] {
    let expenseReturn: Expense[] = [];
    of(EXPENSE_MOCK).subscribe(expense => expenseReturn=expense);
    return expenseReturn;
  }
}
