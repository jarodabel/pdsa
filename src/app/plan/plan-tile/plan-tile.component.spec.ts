import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTileComponent } from './plan-tile.component';

describe('PlanTileComponent', () => {
  let component: PlanTileComponent;
  let fixture: ComponentFixture<PlanTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
