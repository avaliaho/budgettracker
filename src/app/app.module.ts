import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncomeandexpensesComponent } from './incomeandexpenses/incomeandexpenses.component';
import { MonthlybudgetComponent } from './monthlybudget/monthlybudget.component';
import { TimeperiodComponent } from './timeperiod/timeperiod.component';
import { BudgetService } from '../app/budget.service';

let appRoutes: Routes = [
  { path: 'incomeandexpenses', component: IncomeandexpensesComponent },
  { path: 'monthlybudget', component: MonthlybudgetComponent },
  { path: 'timeperiod', component: TimeperiodComponent },
  { path: '', redirectTo: '/incomeandexpenses', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    IncomeandexpensesComponent,
    MonthlybudgetComponent,
    TimeperiodComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
