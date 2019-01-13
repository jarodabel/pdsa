import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  authState: any = null;
  plans: any = [];
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
      if (auth) {
        this.getPlans();
      } else {
        this.plans = [];
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  makeDataWithId(a) {
    return { data: a.payload.doc.data(), id: a.payload.doc.id };
  }

  getPlans() {
    this.db
      .collection('plans', ref =>
        ref.where('users', 'array-contains', this.authState.email)
      )
      .snapshotChanges()
      .pipe(map(a => a.map(a => this.makeDataWithId(a))))
      .subscribe((a) => {
        console.log(a);
        this.plans = a;
      });
  }
}
