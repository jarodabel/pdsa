import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { dispatch } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static readonly USERS_LOCATION = 'USERS_LOCATION';
  something: any;
  user: Observable<any[]>;
  title = 'pdsa';
  @dispatch() usersLocation = a => {
    return {
      type: AppComponent.USERS_LOCATION
    };
  };

  constructor(db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.something = combineLatest(this.afAuth.user)
      .pipe(
        switchMap(([user]) =>
          db
            .collection('users', ref => ref.where('username', '==', user.email))
            .valueChanges()
        ),
        tap(([user]: [any]) =>
          user.location.get().then(a => {
            console.log(a);
          })
        )
      )
      .subscribe(() => {});
  }
}
