import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-plan-document',
  templateUrl: './plan-document.component.html',
  styleUrls: ['./plan-document.component.scss']
})
export class PlanDocumentComponent implements OnInit {
  planForm: FormGroup;
  plan;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public db: AngularFirestore
  ) {}

  async submitHandler() {
    const formValue = this.planForm.value;
    console.log(formValue);
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
      name: ['', Validators.required],
      description: ['', Validators.required]
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
          this.fillForm();
        })
      )
      .subscribe();
  }

  fillForm() {
    const updatePlanFormData = {
      name: [this.plan['name'], Validators.required],
      description: [this.plan['description'], Validators.required],
    };
    this.planForm = this.fb.group(updatePlanFormData);
  }
}
