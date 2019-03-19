import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { budget } from '../budget.interface';

@Component({
  selector: 'app-incomeandexpenses',
  templateUrl: './incomeandexpenses.component.html',
  styleUrls: ['./incomeandexpenses.component.css']
})
export class IncomeandexpensesComponent implements OnInit {

  budget = {
    month: new Date().getMonth(),
    income: 0,
    food: 0,
    drinks: 0,
    housing: 0,
    bills: 0,
    loans: 0,
    travel: 0,
    clothing: 0,
    insurances: 0,
    netflix: 0,
    hobby: 0,
    other: 0,
    date: new Date().getTime()
  } as budget;

  constructor(private service: BudgetService) { }

  ngOnInit() {
    this.budget = this.service.getMonth(new Date().getMonth());
  }

  save = () => {
    this.service.save(this.budget);
  }

}
