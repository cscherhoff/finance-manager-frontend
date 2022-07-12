import { Component, OnInit } from '@angular/core';
import { DepotEntry } from '../data/DepotEntryData';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-investment-depot-entry',
  templateUrl: './investment-depot-entry.component.html',
  styleUrls: ['./investment-depot-entry.component.css']
})
export class InvestmentDepotEntryComponent implements OnInit {

  depotEntries: DepotEntry[] = [];

  constructor(private investmentService: InvestmentService) { }

  ngOnInit(): void {
    this.getDepotEntries();
  }

  getDepotEntries(): void {
    this.investmentService.getDepotEntries()
      .subscribe(depotEntriesResponse => this.depotEntries = depotEntriesResponse);
  }

}
