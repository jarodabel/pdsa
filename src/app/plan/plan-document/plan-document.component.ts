import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { dispatch, select } from '@angular-redux/store';

import { switchMap, tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-document',
  templateUrl: './plan-document.component.html',
  styleUrls: ['./plan-document.component.scss']
})
export class PlanDocumentComponent implements OnInit {
  static readonly CURRENT_PLAN = 'CURRENT_PLAN';
  planForm: FormGroup;
  plan;
  @select(['currentPlan'])
  readonly currentPlan$: Observable<object>;
  currentPlan;

  @dispatch() setCurrentPlan = () => ({
    type: PlanDocumentComponent.CURRENT_PLAN,
    payload: this.plan
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public db: AngularFirestore,
    public dialog: MatDialog
  ) {}

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
    this.currentPlan$.subscribe(a => (this.currentPlan = a));

    const dialogRef = this.dialog.open(PlanTileDialogComponent, {
      width: '250px',
      data: { userList: this.currentPlan.users }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.name = result;
    });
    
    this.planForm = this.fb.group({
      name: [''],
      description: ['']
    });
    this.route.params
      .pipe(
        switchMap(params =>
          this.db
            .collection('plans')
            .doc(params['id'])
            .snapshotChanges()
        ),
        tap(plan => {
          this.plan = plan.payload.data();
          this.setCurrentPlan();
          // select this instead
          this.fillForm();
        })
      )
      .subscribe();
  }

  fillForm() {
    const updatePlanFormData = {
      name: [this.plan['name'], Validators.required],
      description: [this.plan['description'], Validators.required]
    };
    this.planForm = this.fb.group(updatePlanFormData);
  }
}

@Component({
  selector: 'app-plan-tile-dialog',
  exportAs: 'dialog',
  templateUrl: 'plan-tile-dialog.component.html'
})
export class PlanTileDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PlanTileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('hello');
    console.log(this);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
