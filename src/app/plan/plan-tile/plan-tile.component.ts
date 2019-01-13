import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-tile',
  templateUrl: './plan-tile.component.html',
  styleUrls: ['./plan-tile.component.scss']
})
export class PlanTileComponent {
  @Input() plan;

  constructor(private router: Router) {}
  openPlan() {
    this.router.navigate(['plan', this.plan.id]);
  }
}
