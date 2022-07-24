import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DepotEntry } from '../data/DepotEntryData';
import { Profit } from '../data/ProfitData';
import { Transaction } from '../data/Transaction';
import { DEPOT_ENTRIES_MOCK } from '../mockData/mock-depotEntries';
import { PROFIT_MOCK } from '../mockData/mock-profits';
import { ISIN_MOCK, TRANSACTION_MOCK } from '../mockData/mock-transactions';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor() { }

  getIsins(): Observable<string[]> {
    return of(ISIN_MOCK).pipe(delay(5000));
  }

  getTransactions(): Observable<Transaction[]> {
    return of(TRANSACTION_MOCK).pipe(delay(500));
  }

  getDepotEntries(): Observable<DepotEntry[]> {
    return of(DEPOT_ENTRIES_MOCK).pipe(delay(500));
  }

  getProfits(): Observable<Profit[]> {
    return of(PROFIT_MOCK).pipe(delay(1500));
  }

  postTransaction(transaction: Transaction): void {
    console.log('Post transaction: ' + JSON.stringify(transaction));
  }
}
