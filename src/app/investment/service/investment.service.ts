import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  getIsins(): Observable<string[]> {
    return of(ISIN_MOCK).pipe(delay(5000));
  }

  getTransactions(): Observable<Transaction[]> {

    return of(TRANSACTION_MOCK).pipe(delay(500));
  }

  getDepotEntries(): Observable<DepotEntry[]> {
    return this.httpClient.get<DepotEntry[]>('http://localhost:30005/investments/user/1/depotEntries');
    //   .subscribe(response => console.log(response));
    // return of(DEPOT_ENTRIES_MOCK).pipe(delay(500));
  }

  getProfits(): Observable<Profit[]> {
    return of(PROFIT_MOCK).pipe(delay(1500));
  }

  postTransaction(transaction: Transaction): void {
    this.httpClient.post('http://localhost:30005/investments/user/1/transaction', JSON.stringify(transaction), this.httpOptions)
      .subscribe(response => console.log(response));
    console.log('Post transaction: ' + JSON.stringify(transaction));
  }
}
