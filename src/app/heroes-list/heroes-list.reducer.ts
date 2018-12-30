import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { Action, Reducer } from 'redux';

export const ticketsReducer: Reducer<number> = (
  state = 0,
  action: Action,
): number => {
  switch (action.type) {
    case HeroesListComponent.ADD_TICKET:
      return state + 1;
    case HeroesListComponent.REMOVE_TICKET:
      return Math.max(0, state - 1);
  }
  return state;
};

// Basic reducer logic.
export const heroListReducer: Reducer<any> = (
  state: any = {},
  action: Action,
): {} => ({
  ...state,
  tickets: ticketsReducer(state.tickets, action),
});
