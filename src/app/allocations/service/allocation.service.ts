import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';
import { Allocation } from '../data/Allocation';
import { ALLOCATION_Mock } from '../mockData/mock-allocations';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  constructor() { }

  getAllocation(): Observable<Allocation> {
    return of(ALLOCATION_Mock).pipe(delay(500));
  }

  updateAllocation(allocation: Allocation): void {
    console.log("The updated allocation " + JSON.stringify(allocation));
  }

  getIncome(): Observable<number> {
    return of(1234.56).pipe(delay(5000));
  }

  postIncome(income: number): void {
    console.log('Posted income' + income);
  }
}
