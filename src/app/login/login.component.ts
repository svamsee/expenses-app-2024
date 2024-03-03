import { Component, inject } from '@angular/core';
import {
  Auth,
  User,
  user,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from '@angular/fire/auth';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth: Auth = inject(Auth);
  user$: Observable<{
    isLogin: boolean;
    user: User | null;
  }> = user(this.auth).pipe(
    map((user) => ({
      isLogin: !!user,
      user,
    }))
  );
  loginWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout() {
    signOut(this.auth);
  }
}
