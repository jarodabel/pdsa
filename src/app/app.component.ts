import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { dispatch } from '@angular-redux/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static readonly USERS_LOCATION = 'USERS_LOCATION';
  authState: any = null;
  user: any = null;
  isAdmin = false;
  @dispatch() usersLocation = a => {
    return {
      type: AppComponent.USERS_LOCATION
    };
  };

  constructor(
    public db: AngularFirestore,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
      if (auth) {
        this.getUserData();
      } else {
        this.user = null;
        this.isAdmin = false;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/dashboard']);
  }

  getUserData() {
    this.user = this.db
      .collection('users', ref =>
        ref.where('username', '==', this.authState.email)
      )
      .valueChanges()
      .subscribe(a => {
        this.isAdmin = a[0] ? a[0]['admin'] : false;
      });
  }

  goToHome() {
    this.router.navigate(['dashboard']);
  }
}
