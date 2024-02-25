import { Component, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
  signOut,
} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  loginWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout() {
    signOut(this.auth);
  }
}
