import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Allocation } from '../data/Allocation';
import { ALLOCATION_Mock } from '../mockData/mock-allocations';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor() { }

  getAllocation() :Allocation {
    let allocationReturn: Allocation = {income: 0.0, categories: [], fixCosts: []};

    of(ALLOCATION_Mock)
      .subscribe(allocation => allocationReturn = allocation);
    
      return allocationReturn;
  }
}
