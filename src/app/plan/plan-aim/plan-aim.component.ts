import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { Plan } from '../plan.type';

@Component({
  selector: 'app-plan-aim',
  templateUrl: './plan-aim.component.html',
  styleUrls: ['./plan-aim.component.scss']
})
export class PlanAimComponent implements OnInit {
  planForm: FormGroup;
  plan: any;
  @select(['currentPlan'])
  readonly currentPlan$: Observable<object>;

  plan$ = this.currentPlan$.subscribe((a: Plan) => {
    this.plan = a;
    this.planForm = this.fb.group({
      planAimDescription: [a.planAimDescription],
      planAimTypeWhy: [a.planAimTypeWhy],
      planAimWhichSystem: [a.planAimWhichSystem],
      planAimBlockers: [a.planAimBlockers],
    });
  });

  constructor(
    public db: AngularFirestore,
    private fb: FormBuilder,
  ) { }
  async submitHandler() {
    const formValue = this.planForm.value;
    try {
      await this.db
        .collection('plans')
        .doc(this.plan.id)
        .update(formValue);
    } catch (err) {
      console.error(err);
    }
  }

  ngOnInit() {
    this.planForm = this.fb.group({
      planAimDescription: [''],
      planAimTypeWhy: [''],
      planAimWhichSystem: [''],
      planAimBlockers: [''],
    });
  }
}
