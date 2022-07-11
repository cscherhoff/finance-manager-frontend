import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';
import { Allocation } from '../data/Allocation';
import { ALLOCATION_Mock } from '../mockData/mock-allocations';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor() { }

  /* getAllocation_old() :Allocation {
    let allocationReturn: Allocation = {investment: 0.0, categories: [], fixCosts: []};

    of(ALLOCATION_Mock)
      .subscribe(allocation => allocationReturn = allocation);
    
      return allocationReturn;
  } */

  getAllocation(): Observable<Allocation> {
    return of(ALLOCATION_Mock).pipe(delay(500));
  }

  updateAllocation(allocation: Allocation): void {
    console.log("The updated allocation " + JSON.stringify(allocation));
  }
}
