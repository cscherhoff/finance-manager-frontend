import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DepotEntry } from '../data/DepotEntryData';
import { Profit } from '../data/ProfitData';
import { Transaction } from '../data/Transaction';
import { Security } from '../data/Security';
import { PROFIT_MOCK } from '../mockData/mock-profits';
import { InvestmentInformation } from '../data/InvestmentInformation';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('http://localhost:' + environment.backendPort + '/investments/user/1/transactions');
  }

  getDepotEntries(): Observable<DepotEntry[]> {
    return this.httpClient.get<DepotEntry[]>('http://localhost:' + environment.backendPort + '/investments/user/1/depotEntries');
  }

  getProfits(): Observable<Profit[]> {
    return of(PROFIT_MOCK).pipe(delay(1500));
  }

  getIsinSecurityName(): Observable<Security[]> {
    return this.httpClient.get<Security[]>('http://localhost:' + environment.backendPort + '/investments/user/0/securities');
  }

  postTransaction(transaction: Transaction): void {
    this.httpClient.post('http://localhost:' + environment.backendPort + '/investments/user/1234567/transactions', JSON.stringify(transaction), this.httpOptions)
      .subscribe(response => console.log(response));
    console.log('Post transaction: ' + JSON.stringify(transaction));
  }

  getInvestmentInformation(): Observable<InvestmentInformation> {
    return this.httpClient.get<InvestmentInformation>('http://localhost:' + environment.backendPort + '/investments/user/1234567/invested');
  }
}
