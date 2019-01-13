import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAimComponent } from './plan-aim.component';

describe('PlanAimComponent', () => {
  let component: PlanAimComponent;
  let fixture: ComponentFixture<PlanAimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
