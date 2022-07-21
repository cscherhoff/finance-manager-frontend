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
    date: '2022-07-21',
    category: 'CategoryPlaceholder',
    article: 'ArticlePlaceholder',
    amount: '0',
    price: '0',
    overrideDefault: false
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
    console.log(JSON.stringify(this.formData));
  }

  getCategories(): void {
    this.expenseService.getCategories()
      .subscribe(categoriesResponse => {
        this.categories = categoriesResponse;
        if(this.categories.length>0) {
          this.selectedCategory(this.categories[0].categoryName);
        }
      });
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenseResponse => this.expenses = expenseResponse);
  }

  postExpense(overrideDefault: boolean) {
    this.formData.overrideDefault = overrideDefault;
    this.expenseService.postNewExpense(JSON.stringify(this.formData));
  }

  selectedCategory(selectedCategory: string): void {
      this.formData.category = selectedCategory;
      this.articles = this.findCategoryByName(this.formData.category).articles;
      if (this.articles.length>0) {
        this.selectedArticle(this.articles[0].articleName);
      }
  }

  selectedArticle(selectedArticle: string) {
    const article: Article = this.findArticleByName(selectedArticle);
    this.formData.article = article.articleName;
    this.formData.amount = article.defaultAmount.toString();
    this.formData.price = article.defaultPrice.toString();this.printValue();
  }

  findCategoryByName(name: String): Category {
    for (let index = 0; index < this.categories.length; index++) {
      const element = this.categories[index];
      if(name===element.categoryName) {
        return element;
      }
    }
    return {categoryName: 'NotFound', budget: 0, currentBudget: 0, articles: []};
  }

  findArticleByName(selectedArticle: string): Article {
  for (let index = 0; index < this.articles.length; index++) {
    const element = this.articles[index];
    if(selectedArticle===element.articleName) {
      return element;
    }
  }
  return {articleName: 'NotFound', defaultAmount: 0, defaultPrice: 0};
}

}





