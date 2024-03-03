import { Component, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  async logout() {
    await signOut(this.auth);
    this.router.navigate(['login']);
  }
}
