import { Component, ChangeDetectionStrategy} from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HeroesListComponent {
  static readonly ADD_TICKET = 'ADD_TICKET';
  static readonly REMOVE_TICKET = 'REMOVE_TICKET';

  @select(['count', 'tickets'])
  readonly numTickets$: Observable<number>;

  getBasePath = () => null;

  @dispatch() plusOne = () => ({ type: HeroesListComponent.ADD_TICKET });
}
