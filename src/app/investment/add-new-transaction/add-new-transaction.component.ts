import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../service/investment.service';
import { Transaction } from '../data/Transaction';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-new-transaction',
  templateUrl: './add-new-transaction.component.html',
  styleUrls: ['./add-new-transaction.component.css']
})
export class AddNewTransactionComponent implements OnInit {

  formData: Transaction = {
    depotName: 'Trade Republic',
    date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')!,
    type: 'Transfer',
    isin: '',
    securityName: '',
    number: 0,
    price: 0,
    expenses: 0,
    totalPrice: '0'
  }

  isinArray: string[] = [];

  constructor(private investmentService: InvestmentService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getIsinArray();
    this.selectedDepotName(this.formData.depotName);
  }

  selectedIsin(selectedIsin: string) {
    this.formData.isin = selectedIsin;
  }

  selectedDepotName(selectedDepotName: string) {
    this.formData.depotName = selectedDepotName;
    console.log(selectedDepotName);
  }

  selectedType(selectedType: string) {
    this.formData.type = selectedType;
    console.log(selectedType);
  }

  getIsinArray(): void {
    this.investmentService.getIsins()
      .subscribe(isinResponse => {
        this.isinArray = isinResponse;
        if(isinResponse.length>0) {
          this.formData.isin = isinResponse[0];
        }
        }
      );
  }

  postTransaction(): void {
    this.investmentService.postTransaction(this.formData);
  }

  calculateTotalPrice(): void {
    this.formData.totalPrice = (this.formData.number * this.formData.price + this.formData.expenses).toFixed(2);
  }

}
