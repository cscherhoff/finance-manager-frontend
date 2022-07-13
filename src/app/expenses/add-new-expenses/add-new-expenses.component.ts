import { Component, OnInit } from '@angular/core';
import { Article } from '../data/Article';
import { Category } from '../data/category';
import { Expense } from '../data/Expense';
import {ExpenseService} from '../service/expense.service';

@Component({
  selector: 'app-add-new-expenses',
  templateUrl: './add-new-expenses.component.html',
  styleUrls: ['./add-new-expenses.component.css']
})
export class AddNewExpensesComponent implements OnInit {

  formData = {
    date: '21.10.2021',
    category: 'CategoryPlaceholder',
    article: 'ArticlePlaceholder',
    amount: '0',
    price: '0'
  }

  expenses: Expense[] = [];
  categories: Category[] = [];
  articles: Article[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getExpenses();
  }

  printValue(): void {
    console.log(this.formData);
  }

  categorySelected(): void {
    this.articles = this.findCategoryByName(this.formData.category).articles;
  }

  getCategories(): void {
    this.expenseService.getCategories()
      .subscribe(categoriesResponse => {
        this.categories = categoriesResponse;
        this.loadForm();
        });
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenseResponse => this.expenses = expenseResponse);
  }

  loadForm(): void {
    console.log('loading form with ' + this.categories.length + ' categories.')
    if(this.categories.length>0) {
    this.formData.category = this.categories[0].categoryName;
    this.categorySelected();
    console.log('Category got initialized');
    // this.articles = this.categories[0].articles;
    // this.formData.article = this.categories[0].articles[0].articleName;
  }}

  findCategoryByName(name: String): Category {
    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      if(name===element.categoryName) {
        return element;
      }
    }
    return {categoryName: 'NotFound', budget: 0, currentBudget: 0, articles: []};
  }

}
