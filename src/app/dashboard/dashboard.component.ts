import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';
import { dispatch } from '@angular-redux/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  static readonly USERS_DATA = 'USERS_DATA';
  authState: any = null;
  plans: any = [];

  @dispatch() usersData = a => {
    return {
      type: DashboardComponent.USERS_DATA,
      payload: a
    };
  };

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
      if (auth) {
        this.getPlans();
        this.getUserData();
      } else {
        this.plans = [];
        this.usersData({});
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  makeDataWithId(a) {
    return { data: a.payload.doc.data(), id: a.payload.doc.id };
  }

  getUserData() {
    this.db.collection('users', ref =>
      ref.where('username', '==', this.authState.email)
    )
    .snapshotChanges()
    .pipe(map(a => a.map(a => a.payload.doc.data())))
    .subscribe(a => {
      this.usersData(a[0]);
    });
  }

  getPlans() {
    this.db
      .collection('plans', ref =>
        ref.where('users', 'array-contains', this.authState.email)
      )
      .snapshotChanges()
      .pipe(map(a => a.map(a => this.makeDataWithId(a))))
      .subscribe(a => {
        this.plans = a;
      });
  }

  async createNew() {
    const formValue = {
      name: 'New Document',
      description: '',
      users: [this.authState.email]
    };
    try {
      await this.db.collection('plans').add(formValue);
    } catch (err) {
      console.error(err);
    }
  }
}
