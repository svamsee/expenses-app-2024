import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import {
  hasCustomClaim,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AuthGuard,
} from '@angular/fire/auth-guard';

/*
https://github.com/angular/angularfire/blob/master/site/src/auth/route-guards.md
 */

const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard } },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }  },
  { path: 'income', component: IncomeComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }  },
  { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
