import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-tile',
  templateUrl: './plan-tile.component.html',
  styleUrls: ['./plan-tile.component.scss']
})
export class PlanTileComponent implements OnInit {
  @Input() plan;

  @select(['currentUser'])
  readonly currentUser$: Observable<object>;
  currentUser;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
  ) {}

  ngOnInit() {
    this.currentUser$.subscribe(a => (this.currentUser = a));
  }

  openPlan() {
    this.router.navigate(['plan', this.plan.id]);
  }
  addUser() {
    this.router.navigate(['plan', this.plan.id, {outlets: { dialog: 'users' } }]);
  }
}
