import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.type';
import { FormGroup, FormBuilder } from '@angular/forms';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent implements OnInit {
  planForm: FormGroup;
  plan: any;
  @select(['currentPlan'])
  readonly currentPlan$: Observable<object>;

  plan$ = this.currentPlan$.subscribe((a: Plan) => {
    this.plan = a;
    this.planForm = this.fb.group({
      planTeamChair: [a.planTeamChair],
      planTeamMembers: [a.planTeamMembers],
      planTeamDetails: [a.planTeamDetails]
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
      planTeamChair: [''],
      planTeamMembers: [''],
      planTeamDetails: ['']
    });
  }
}
