import { createReducer } from '../utils';

export const initialState = {
  contacts: [],
  loading: false,
  page: 1
};

export const reducer = createReducer(initialState, {
  'FETCH_CONTACTS' (state) {
		return {
      ...state,
      loading: true
    };
  },
	'FETCH_CONTACTS_SUCCEDED' (state, action) {
		return {
      ...state,
      contacts: action.payload.contacts,
      loading: false,
    };
  },
  'FETCH_CONTACTS_FAILED' (state) {
		return {
      ...state,
      loading: false
    };
  },
  '@@router/LOCATION_CHANGE_SUCCEDED' (state, action) {
    let payloadPage = action.payload.page;
    let page = 1;
    if (Number(payloadPage) === parseInt(payloadPage)) {
      page = Number(payloadPage);
    }
		return {
      ...state,
      page
    };
  }
});
