import { Component, OnInit } from '@angular/core';
import { Profit } from '../data/ProfitData';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-investment-profit',
  templateUrl: './investment-profit.component.html',
  styleUrls: ['./investment-profit.component.css']
})
export class InvestmentProfitComponent implements OnInit {

  profits: Profit[] = [];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.getProfits();
  }

  getProfits(): void {
    this.investmentService.getProfits()
      .subscribe(profitsResponse => this.profits = profitsResponse);
  }

}
