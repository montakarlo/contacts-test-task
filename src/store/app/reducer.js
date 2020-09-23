import { randomIntegerInRange } from 'utils';
import { createReducer } from '../utils';
export const initialState = {};

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
    const contactsAmount = localStorage.getItem('contactsAmount');
    if (!contactsAmount) {
      localStorage.setItem('contactsAmount', randomIntegerInRange(20, 500));
    }
    if (!localStorage.getItem('view')) {
      localStorage.setItem('view', 'table');
    }
		return {
      ...state,
      contactsAmount,
      view: localStorage.getItem('view'),
    };
  },
  'SET_VIEW' (state) {
    const view = localStorage.getItem('view');
    if (view === 'table') {
      localStorage.setItem('view', 'tiles');
    } else {
      localStorage.setItem('view', 'table');
    }
    return {
      ...state,
      view: localStorage.getItem('view'),
    };
  }
});
