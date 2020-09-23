import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as reducers from './export-reducers.js';
import {reducer as toastrReducer} from 'react-redux-toastr'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  toastr: toastrReducer,
	...reducers
});

export { createRootReducer };
