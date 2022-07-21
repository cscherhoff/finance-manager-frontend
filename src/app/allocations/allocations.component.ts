import { Component, OnInit } from '@angular/core';
import { Allocation } from './data/Allocation';
import { Category } from './data/Category';
import { FixCost } from './data/FixCost';
import { AllocationService } from './service/allocation.service';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.css']
})
export class AllocationsComponent implements OnInit {
  
  isUpdating: boolean = false;
  addFixcost: boolean = false;
  addCategory: boolean = false;
  newFixcost: FixCost = {fixCostName: '', amount: 0};
  newCategory: Category = {categoryName: '', budget: 0};
  public newValue: number = 0;
  income: number = 0;

  fixCostSum: number = 0;
  categorySum: number = 0;

  allocation: Allocation = {investment: 0.0, categories: [], fixCosts: []};
  allocationUpdate: Allocation = {investment: 0.0, categories: [], fixCosts: []};

  constructor(private allocationService: AllocationService) { }

  ngOnInit(): void {
    this.getAllocation();
    this.getIncome();
  }

  getAllocation(): void {
   this.allocationService.getAllocation()
    .subscribe(allocationResponse => {
      this.allocation = allocationResponse;
      this.calculateFixCostSum();
      this.calculateCategorySum();
    });
  }

  getIncome(): void {
    this.allocationService.getIncome()
      .subscribe(incomeResponse => this.income = incomeResponse);
  }

  postIncome(): void {
    this.allocationService.postIncome(this.income);
  }

  updateFixcost(i: number) {
    this.newValue = this.allocation.fixCosts[i].amount;
    this.allocation.fixCosts[i].updating = true;
  }

  submitUpdateFixcost(i: number) {
    this.allocation.fixCosts[i].amount = this.newValue;
    this.allocation.fixCosts[i].updating = false;
    this.calculateFixCostSum();
  }

  updateCategory(i: number) {
    this.newValue = this.allocation.categories[i].budget;
    this.allocation.categories[i].updating = true;
  }

  submitUpdateCategory(i: number) {
    this.allocation.categories[i].budget = this.newValue;
    this.allocation.categories[i].updating = false;
    this.calculateCategorySum();
  }

  addNewFixcost() {
    this.addFixcost = true;
  }

  addNewCategory() {
    this.addCategory = true;
  }

  submitNewFixcost() {
    this.allocation.fixCosts.push({fixCostName: this.newFixcost.fixCostName, amount: this.newFixcost.amount});
    this.addFixcost = false;
    this.newFixcost.fixCostName = '';
    this.newFixcost.amount = 0;
    this.calculateFixCostSum();
  }

  submitNewCategory() {
    this.allocation.categories.push({categoryName: this.newCategory.categoryName, budget: this.newCategory.budget});
    this.addCategory = false;
    this.newCategory.categoryName = '';
    this.newCategory.budget = 0;
    this.calculateCategorySum();
  }

  calculateFixCostSum() {
    this.fixCostSum = 0;
    this.allocation.fixCosts.forEach(fixCost => {
      this.fixCostSum+= fixCost.amount;
    });
  }

  calculateCategorySum() {
    this.categorySum = 0;
    this.allocation.categories.forEach(category => {
      this.categorySum += category.budget;
    })
  }
}
