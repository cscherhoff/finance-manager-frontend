import { Component, OnInit } from '@angular/core';
import { Allocation } from './data/Allocation';
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
  newFixcost: FixCost = {fixCostName: '', amount: 0};
  public newValue: number = 0;
  income: number = 0;

  allocation: Allocation = {investment: 0.0, categories: [], fixCosts: []};
  allocationUpdate: Allocation = {investment: 0.0, categories: [], fixCosts: []};

  constructor(private allocationService: AllocationService) { }

  ngOnInit(): void {
    this.getAllocation();
    this.getIncome();
  }

  getAllocation(): void {
   this.allocationService.getAllocation()
    .subscribe(allocationResponse => this.allocation = allocationResponse);
  }

  getIncome(): void {
    this.allocationService.getIncome()
      .subscribe(incomeResponse => this.income = incomeResponse);
  }

  postIncome(): void {
    this.allocationService.postIncome(this.income);
  }

  updateAllocation(i: number) {
    this.newValue = this.allocation.fixCosts[i].amount;
    this.allocation.fixCosts[i].updating = true;
  }

  submitUpdateAllocation(i: number) {
    this.allocation.fixCosts[i].amount = this.newValue;
    this.allocation.fixCosts[i].updating = false;
  }

  addNewFixcost() {
    this.addFixcost = true;
  }

  submitNewFixcost() {
    this.allocation.fixCosts.push({fixCostName: this.newFixcost.fixCostName, amount: this.newFixcost.amount});
    this.addFixcost = false;
  }
}
