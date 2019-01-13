import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-plan-aim',
  templateUrl: './plan-aim.component.html',
  styleUrls: ['./plan-aim.component.scss']
})
export class PlanAimComponent implements OnInit {
  @Input() plan;
  planForm: FormGroup;

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

  ngOnChanges(changes: any): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    this.plan = changes.plan.currentValue;
    if(this.plan){
      this.planForm = this.fb.group({
        planAimDescription: [this.plan.planAimDescription],
        planAimTypeWhy: [this.plan.planAimTypeWhy],
        planAimWhichSystem: [this.plan.planAimWhichSystem],
        planAimBlockers: [this.plan.planAimBlockers],
      });
    }

  }
}
