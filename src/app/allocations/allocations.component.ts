import { Component, OnInit } from '@angular/core';
import { Allocation } from './data/Allocation';
import { AllocationService } from './service/allocation.service';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.css']
})
export class AllocationsComponent implements OnInit {
  
  isUpdating: boolean = false;
  public newValue: number =0;

  allocation: Allocation = {investment: 0.0, categories: [], fixCosts: []};
  allocationUpdate: Allocation = {investment: 0.0, categories: [], fixCosts: []};

  constructor(private allocationService: AllocationService) { }

  ngOnInit(): void {
    this.getAllocation();
  }

  getAllocation(): void {
   this.allocationService.getAllocation()
    .subscribe(allocationResponse => this.allocation = allocationResponse);
  }

  updateAllocation(i: number) {
    this.newValue = this.allocation.fixCosts[i].value;
    this.allocation.fixCosts[i].updating = true;
  }

  submitUpdateAllocation(i: number) {
    this.allocation.fixCosts[i].value = this.newValue;
    this.allocation.fixCosts[i].updating = false;
  }
}
