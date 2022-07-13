import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Category } from '../data/category';
import { Expense } from '../data/Expense';
import { CATEGORIES_MOCK } from '../mockData/mock-categories';
import { EXPENSE_MOCK } from '../mockData/mock-expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  getExpenses(): Observable<Expense[]> {
    return of(EXPENSE_MOCK).pipe(delay(7000));
  }

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES_MOCK).pipe(delay(500));
  }
}
