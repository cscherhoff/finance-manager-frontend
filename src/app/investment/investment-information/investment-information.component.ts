import { Component, OnInit } from '@angular/core';
import { InvestmentInformation } from '../data/InvestmentInformation';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-investment-information',
  templateUrl: './investment-information.component.html',
  styleUrls: ['./investment-information.component.css']
})
export class InvestmentInformationComponent implements OnInit {

  investmentInformation: InvestmentInformation = {
    dedicated: 0.00,
    invested: 0.00,
    investable: 0.00
  };
  

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.getInvestInformation();
  }

  getInvestInformation(): void{
    this.investmentService.getInvestmentInformation()
      .subscribe(investInfo => this.investmentInformation = investInfo);
  }

}
