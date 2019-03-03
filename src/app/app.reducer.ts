import { AppComponent } from './app.component';
import { Action, Reducer } from 'redux';
import { PlanDocumentComponent } from './plan/plan-document/plan-document.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const locationReducer: Reducer<number> = (
  state = 0,
  action: Action
): number => {
  switch (action.type) {
    case AppComponent.USERS_LOCATION:
      return 6;
  }
  return state;
};

export const planReducer: Reducer<object> = (
  state = {},
  action: any
): object => {
  switch (action.type) {
    case PlanDocumentComponent.CURRENT_PLAN:
      return Object.assign({}, action.payload);
  }
  return state;
};

export const userReducer: Reducer<object> = (
  state = {},
  action: any
): object => {
  switch (action.type) {
    case DashboardComponent.USERS_DATA:
      return Object.assign({}, action.payload);
  }
  return state;
};
