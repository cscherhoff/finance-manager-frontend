import { Component, OnInit } from '@angular/core';
import { Allocation } from './data/Allocation';
import { AllocationService } from './service/allocation.service';
import { ALLOCATION_Mock } from './mockData/mock-allocations';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.css']
})
export class AllocationsComponent implements OnInit {

  allocation: Allocation = {investment: 0.0, categories: [], fixCosts: []};

  constructor(private allocationService: AllocationService) { }

  ngOnInit(): void {
    this.getAllocation();
  }

  getAllocation(): void {
   this.allocationService.getAllocation()
    .subscribe(allocationResponse => this.allocation = allocationResponse);
  }
}
