import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentInformationComponent } from './investment-information.component';

describe('InvestmentInformationComponent', () => {
  let component: InvestmentInformationComponent;
  let fixture: ComponentFixture<InvestmentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
