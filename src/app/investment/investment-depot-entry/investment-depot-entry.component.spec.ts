import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDepotEntryComponent } from './investment-depot-entry.component';

describe('InvestmentDepotEntryComponent', () => {
  let component: InvestmentDepotEntryComponent;
  let fixture: ComponentFixture<InvestmentDepotEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDepotEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDepotEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
