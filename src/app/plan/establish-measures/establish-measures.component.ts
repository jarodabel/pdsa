import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.type';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-establish-measures',
  templateUrl: './establish-measures.component.html',
  styleUrls: ['./establish-measures.component.scss']
})
export class EstablishMeasuresComponent implements OnInit {
  planForm: FormGroup;
  plan: any;
  @select(['currentPlan'])
  readonly currentPlan$: Observable<object>;

  plan$ = this.currentPlan$.subscribe((a: Plan) => {
    this.plan = a;
    this.planForm = this.fb.group({
      planAccomplishmentDescription: [a.planAccomplishmentDescription],
      planAccomplishmentResult: [a.planAccomplishmentResult],
      planAccomplishmentOutcomes: [a.planAccomplishmentOutcomes],
      planAccomplishmentBaseline: [a.planAccomplishmentBaseline]
    });
  });
  constructor(public db: AngularFirestore, private fb: FormBuilder) {}

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
      planAccomplishmentDescription: [''],
      planAccomplishmentResult: [''],
      planAccomplishmentOutcomes: [''],
      planAccomplishmentBaseline: ['']
    });
  }
}
