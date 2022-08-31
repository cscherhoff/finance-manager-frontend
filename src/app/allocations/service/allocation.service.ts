import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';
import { Allocation } from '../data/Allocation';
import { environment } from 'src/app/environment';

@Injectable({
  providedIn: 'root'
})
export class AllocationService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  getAllocation(): Observable<Allocation> {
    return this.httpClient.get<Allocation>('http://localhost:' + environment.backendPortAllocation + '/allocation/user/3');
  }

  updateAllocation(allocation: Allocation): void {
    this.httpClient.put('http://localhost:' + environment.backendPortAllocation + '/allocation/user/3',JSON.stringify(allocation), this.httpOptions)
      .subscribe(response => console.log(response));
    console.log("The updated allocation " + JSON.stringify(allocation));
  }

  getIncome(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:' + environment.backendPortAllocation + '/income/user/3');
  }

  postIncome(income: number): void {
    this.httpClient.post('http://localhost:' + environment.backendPortAllocation + '/income/user/3', income, this.httpOptions)
      .subscribe(response => console.log(response));
    console.log('Posted income' + income);
  }
}
