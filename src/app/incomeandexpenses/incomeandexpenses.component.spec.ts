import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeandexpensesComponent } from './incomeandexpenses.component';

describe('IncomeandexpensesComponent', () => {
  let component: IncomeandexpensesComponent;
  let fixture: ComponentFixture<IncomeandexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeandexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeandexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
