import { AppComponent } from './app.component';
import { Action, Reducer } from 'redux';


export const locationReducer: Reducer<number> = (
    state = 0,
    action: Action,
  ): number => {
    switch (action.type) {
      case AppComponent.USERS_LOCATION:
        return 6;
    }
    return state;
  };

export const appReducer: Reducer<any> = (
    state: any = {},
    action: Action,
  ): {} => ({
    ...state,
    location: locationReducer(state.location, action),
  });
