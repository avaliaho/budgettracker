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

  constructor(private service: BudgetService) { }

  ngOnInit() {
    this.beginDate = new Date().toISOString().slice(0, 16);
    this.endDate = new Date().toISOString().slice(0, 16);
  }

  getDatePeriod = () => {
    this.withinRange = this.service.getDatePeriod(Date.parse(this.beginDate),
      Date.parse(this.endDate));
    console.log(this.withinRange)
  }

}
