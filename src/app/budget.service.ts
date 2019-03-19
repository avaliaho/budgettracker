import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { budget } from './budget.interface';

@Injectable()
export class BudgetService {

  constructor(private http: HttpClient) { }

  getMonth = (month: number): budget => {
    let budgets: budget[] = JSON.parse(localStorage.getItem("budgets"));

    if (budgets != null) {
      for (let budget of budgets) {
        if (budget.month == month) {
          return budget;
        }
      }
    }
  }

  getAll = () => {
    let budgets: budget[] = JSON.parse(localStorage.getItem("budgets"));

    if (budgets != null) {
      return budgets;
    }
  }

  save = (form: budget) => {

    let month: budget = {
      "month": form.month,
      "income": form.income,
      "food": form.food,
      "drinks": form.drinks,
      "housing": form.housing,
      "bills": form.bills,
      "loans": form.loans,
      "travel": form.travel,
      "clothing": form.clothing,
      "insurances": form.insurances,
      "netflix": form.netflix,
      "hobby": form.hobby,
      "other": form.other,
      "date": new Date().getTime()
    };

    let budgets: budget[] = JSON.parse(localStorage.getItem("budgets"))

    if (budgets == null) {
      budgets = [];
      budgets.push(month);
      localStorage.setItem("budgets", JSON.stringify(budgets))
    } else {
      budgets.forEach((budget, index) => {
        if (budget.month == form.month) {
          budgets[index] = month;
        }
      })

      localStorage.setItem("budgets", JSON.stringify(budgets))
    }
  }

  getDatePeriod = (beginDate: number, endDate: number): budget[] => {
    let budgets: budget[] = JSON.parse(localStorage.getItem("budgets"));
    let withinRange: budget[] = [];

    for (let budget of budgets) {
      if (budget.date >= beginDate && budget.date <= endDate) {
        withinRange.push(budget);
      }
    }
    return withinRange;
  }

}
