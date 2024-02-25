import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAsrS9A1bYJ3nQOuzL2r7rhuW9TeG_lTlY',
        authDomain: 'expenses-app-2024.firebaseapp.com',
        projectId: 'expenses-app-2024',
        storageBucket: 'expenses-app-2024.appspot.com',
        messagingSenderId: '343505671608',
        appId: '1:343505671608:web:a7c688f52dcc9b24562b4d',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
