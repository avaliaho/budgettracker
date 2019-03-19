import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { budget } from '../budget.interface';

@Component({
  selector: 'app-incomeandexpenses',
  templateUrl: './incomeandexpenses.component.html',
  styleUrls: ['./incomeandexpenses.component.css']
})
export class IncomeandexpensesComponent implements OnInit {

  budget = {} as budget;

  constructor(private service: BudgetService) { }

  ngOnInit() {
    this.budget = this.service.getMonth(new Date().getMonth());
    console
  }

  save = () => {
    this.service.save(this.budget);
  }

}
