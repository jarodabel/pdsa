import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Plan } from '../plan.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-overview',
  templateUrl: './plan-overview.component.html',
  styleUrls: ['./plan-overview.component.scss']
})
export class PlanOverviewComponent implements OnInit {
  planForm: FormGroup;
  plan: any;
  currentId: string;

  @select(['currentPlan'])
  readonly currentPlan$: Observable<object>;

  plan$ = this.currentPlan$.subscribe((a: Plan) => {
    this.plan = a;
    this.planForm = this.fb.group({
      name: [a.name],
      description: [a.description],
      planAimDescriptionStatus: [a.planAimDescriptionStatus],
      planFormTeamStatus: [a.planFormTeamStatus],
      planEstablishMeasuresStatus: [a.planEstablishMeasuresStatus],
      planSelectChangesStatus: [a.planSelectChangesStatus],
      planTestPilotStatus: [a.planTestPilotStatus],
      planImplementChangesStatus: [a.planImplementChangesStatus],
      planSpreadChangeStatus: [a.planSpreadChangeStatus]
    });
  });

  constructor(
    public db: AngularFirestore,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async submitHandler() {
    const formValue = this.planForm.value;
    try {
      await this.db
        .collection('plans')
        .doc(this.currentId)
        .update(formValue);
    } catch (err) {
      console.error(err);
    }
  }

  ngOnInit() {
    this.planForm = this.fb.group({
      name: [''],
      description: [''],
      planAimDescription: [''],
      planAimTypeWhy: [''],
      planAimWhichSystem: [''],
      planAimBlockers: [''],
      planAimDescriptionStatus: [undefined],
      planFormTeamStatus: [undefined],
      planEstablishMeasuresStatus: [undefined],
      planSelectChangesStatus: [undefined],
      planTestPilotStatus: [undefined],
      planImplementChangesStatus: [undefined],
      planSpreadChangeStatus: [undefined]
    });

    this.route.params
      .pipe(
        tap(params => {
          this.currentId = params['id'];
        })
      )
      .subscribe();
  }
}
