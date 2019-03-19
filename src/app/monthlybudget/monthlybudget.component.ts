import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { budget } from '../budget.interface';

@Component({
  selector: 'app-monthlybudget',
  templateUrl: './monthlybudget.component.html',
  styleUrls: ['./monthlybudget.component.css']
})
export class MonthlybudgetComponent implements OnInit {

  budgets: budget[] = [];

  constructor(private service: BudgetService) { }

  ngOnInit() {
    this.budgets = this.service.getAll();
  }

}
