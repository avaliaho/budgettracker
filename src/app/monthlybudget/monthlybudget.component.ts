import { Component, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from '../budget.service';
import { budget } from '../budget.interface';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-monthlybudget',
  templateUrl: './monthlybudget.component.html',
  styleUrls: ['./monthlybudget.component.css']
})
export class MonthlybudgetComponent {

  budgets: budget[] = [];
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  constructor(private service: BudgetService) {}

  ngOnInit() {
    this.budgets = this.service.getAll();
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'pie',
      
      data: {
        datasets: [{
          label: 'Expenses',
          backgroundColor: "rgba(0, 123, 255,0.4)",
          borderColor: "rgb(0, 123, 255)",
          fill: true,
          data: [
            this.budgets[0].drinks, 
            this.budgets[0].food, 
            this.budgets[0].hobby, 
            this.budgets[0].housing,
            this.budgets[0].insurances,
            this.budgets[0].loans, 
            this.budgets[0].netflix, 
            this.budgets[0].other
          ],
        }],
        labels: ['Drinks', 'Food', 'Hobby', 'Housing', 'Insurance', 'Loans', 'Netflix', 'Other']
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Expenses'
        }
      }
    });
  }

}
