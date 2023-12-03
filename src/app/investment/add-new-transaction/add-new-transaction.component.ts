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
    type: 'TransferToDepot',
    isin: '',
    securityName: '',
    number: 0,
    price: 0,
    expenses: 0,
    totalPrice: '0'
  }

  isinInputDisabled: boolean = false;
  securityNameInputDisabled: boolean = false;
  numberInputDisabled: boolean = false;
  priceInputDisabled: boolean = false;
  expenseInputDisabled: boolean = false;

  isinNameMap:Map<string, string> = new Map<string, string>([
    ["US1234567890", "Fielmann"],
    ["FR0123456789", "Apple"]
  ]);

  isinArray: string[] = [];

  constructor(private investmentService: InvestmentService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getIsinArray();
    this.selectedDepotName(this.formData.depotName);
    this.selectedType(this.formData.type);
  }

  selectedIsin(selectedIsin: string) {
    this.formData.isin = selectedIsin;
    this.formData.securityName = this.isinNameMap.get(selectedIsin)!;
  }

  selectedDepotName(selectedDepotName: string) {
    this.formData.depotName = selectedDepotName;
    console.log(selectedDepotName);
  }

  selectedType(selectedType: string) {
    this.formData.type = selectedType;
    let indexOf:number = ['TransferToDepot', 'TransferFromDepot', 'DepotCost', 'Dividend'].indexOf(selectedType);
    if(indexOf >= 0) {
      this.isinInputDisabled = true;
      this.securityNameInputDisabled = true;
      this.numberInputDisabled = true;
      this.priceInputDisabled = true;
      this.expenseInputDisabled = true;
    } else {
      this.isinInputDisabled = false;
      this.securityNameInputDisabled = false;
      this.numberInputDisabled = false;
      this.priceInputDisabled = false;
      this.expenseInputDisabled = false;
    }
    if('Dividend' === selectedType) {
      this.isinInputDisabled = false;
      this.securityNameInputDisabled = false;
      this.numberInputDisabled = false;
    }
    console.log(selectedType);
  }

  getIsinArray(): void {
    this.investmentService.getIsinSecurityName()
      .subscribe(isinResponse => {

        isinResponse.forEach((security) => {
          this.isinNameMap.set(security.isin, security.securityName);
          this.isinArray.push(security.isin);
        });
        if(isinResponse.length>0) {
          this.selectedIsin(isinResponse[0].isin);
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
