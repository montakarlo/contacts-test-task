import { takeEvery, put, call, all } from 'redux-saga/effects';
import { getContacts } from 'services/contacts';
import { store } from 'store';
import { toastrError, toastrSuccess } from 'services/toastr';

function* fetchContacts({ payload }) {
  try {
    const state = store.getState();
    const page = state.router.location.pathname.slice(10);
    const contacts = yield call(getContacts, payload);
    contacts.forEach(contact => {
      contact.name = `${contact.name.first} ${contact.name.last}`;
      contact.location = { country: `/${contact.location.country}/`, address: `${contact.location.street.number} 
        ${contact.location.street.name}, ${contact.location.city}, ${contact.location.state} ${contact.location.postcode}` };
      contact.dob = `${new Date(contact.dob.date).getMonth()+1}/${new Date(contact.dob.date).getDate()}/${new Date(contact.dob.date).getFullYear()}`;
    });
    yield call(toastrSuccess, 'Contacts have been successfully received');
    yield put({type: 'FETCH_CONTACTS_SUCCEDED', payload: {contacts, page}});
  } catch (error) {
    yield call(toastrError, error.message);
    yield put({type: 'FETCH_CONTACTS_FAILED'});
  }
}

function* watchFetchContacts() {
  yield takeEvery('FETCH_CONTACTS', fetchContacts);
}

function* setPage() {
    const state = store.getState();
    const page = state.router.location.pathname.slice(10);
    yield put({type: '@@router/LOCATION_CHANGE_SUCCEDED', payload: { page }});
}

function* watchSetPage() {
  yield takeEvery('@@router/LOCATION_CHANGE', setPage);
}

export function* contactsSaga() {
  yield all([
    watchFetchContacts(),
    watchSetPage()
  ]);
}
