import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { heroListReducer } from '../heroes-list/heroes-list.reducer';
import { planReducer, locationReducer, userReducer } from '../app.reducer';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    count: heroListReducer,
    location: locationReducer,
    currentPlan: planReducer,
    currentUser: userReducer,
    router: routerReducer,
  }),
);
