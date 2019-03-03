import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishMeasuresComponent } from './establish-measures.component';

describe('EstablishMeasuresComponent', () => {
  let component: EstablishMeasuresComponent;
  let fixture: ComponentFixture<EstablishMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
