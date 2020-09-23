import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import { OActionTypes as contacts } from 'store/contactsstore/actions';
import { OActionTypes as app } from 'store/app/actions';

const mapStateToProps = (state) => {
	return {
    contacts: state.contacts.contacts,
    loading: state.contacts.loading,
    page: state.contacts.page,
    amount: state.app.contactsAmount,
    view: state.app.view
  };
};

const mapDispatchToProps = {
  fetchContacts: contacts.getContacts,
  setView: app.setView
};

const PageContacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { PageContacts };
