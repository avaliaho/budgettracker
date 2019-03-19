import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { budget } from '../budget.interface';

@Component({
  selector: 'app-timeperiod',
  templateUrl: './timeperiod.component.html',
  styleUrls: ['./timeperiod.component.css']
})
export class TimeperiodComponent implements OnInit {

  beginDate: string;
  endDate: string;
  withinRange: budget[] = [];
  totalExpenses: number;
  totalIncome: number;

  constructor(private service: BudgetService) { }

  ngOnInit() {
    this.beginDate = new Date().toISOString().slice(0, 16);
    this.endDate = new Date().toISOString().slice(0, 16);
  }

  getDatePeriod = () => {
    this.totalExpenses = 0;
    this.totalIncome = 0;
    this.withinRange = this.service.getDatePeriod(Date.parse(this.beginDate), Date.parse(this.endDate));

    for (let month of this.withinRange) {
      this.totalExpenses += month.bills;
      this.totalExpenses += month.clothing;
      this.totalExpenses += month.drinks;
      this.totalExpenses += month.food;
      this.totalExpenses += month.hobby;
      this.totalExpenses += month.housing;
      this.totalExpenses += month.insurances;
      this.totalExpenses += month.loans;
      this.totalExpenses += month.netflix;
      this.totalExpenses += month.other;      
      this.totalExpenses += month.travel;

      this.totalIncome += month.income;
    }
  }

}
