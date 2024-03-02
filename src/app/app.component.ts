import { Component, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  user,
  signOut,
  User,
} from '@angular/fire/auth';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
