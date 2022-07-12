import { Component, OnInit } from '@angular/core';
import { Transaction } from '../data/Transaction';
import {InvestmentService} from '../service/investment.service';

@Component({
  selector: 'app-investment-transaction',
  templateUrl: './investment-transaction.component.html',
  styleUrls: ['./investment-transaction.component.css']
})
export class InvestmentTransactionComponent implements OnInit {

  transaction: Transaction[] = [{depotName:"", date: new Date("2000-01-01"),  type: "",  securityName: "",  price: 0,  number: 0, expenses: 0, totalPrice: 0}];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.investmentService.getTransactions()
      .subscribe(transactionResponse => this.transaction = transactionResponse);
  }

}
