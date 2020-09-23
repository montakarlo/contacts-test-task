import React, { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';
import './style.scss';
import { Spinner, Popover, OverlayTrigger } from 'react-bootstrap';
import { Tiles } from 'components/contacts/tiles';
import { Table } from 'components/contacts/table';
import { Pagination } from 'components/contacts/pagination';
import { Header } from 'components/contacts/header';
import { getSortedContacts } from 'utils/sort'
import { useHistory } from 'react-router-dom';

const View = ({ fetchContacts, setView, contacts, loading, page, amount, view }) => {
  const history = useHistory();
  const [sortOption, setSortOption] = useState('default');
  const [filterOption, setFilterOption] = useState('clear');
  const [filterOptionItem, setFilterOptionItem] = useState('clear');
  const [filterObject, setFilterObject] = useState();
  const [contactsList, setContactsList] = useState(contacts);
  const [male, setMale] = useState(contacts);
  const [female, setFemale] = useState(contacts);
  const [undecided, setUndecided] = useState(contacts);
  const [natAmount, setNatAmount] = useState(contacts);

  const updateContacts = () => {
    fetchContacts({page: 1, amount});
  }
  useEffect(() => {
    updateContacts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let obj = {
      gender: [],
      name: [],
      nat: []
    };
    let maleCount = 0;
    let femaleCount = 0;
    let natAmountObj = {};
    contacts.forEach(contact => {
      if (!obj.gender.includes(contact.gender)) {
        obj.gender.push(contact.gender)
      }
      if (!obj.name.includes(contact.name)) {
        obj.name.push(contact.name)
      }
      if (!obj.nat.includes(contact.nat)) {
        obj.nat.push(contact.nat)
      }
      if (contact.gender === 'male') {
        maleCount++
      }
      if (contact.gender === 'female') {
        femaleCount++
      }
      if (contact.nat in natAmountObj) {
        natAmountObj[contact.nat] ++;
      } else {
        natAmountObj[contact.nat] = 1;
      }
    });
    setMale(maleCount);
    setFemale(femaleCount);
    setUndecided(contacts.length - maleCount - femaleCount);
    setContactsList(getSortedContacts(contacts, sortOption));
    setFilterObject(obj);
    setNatAmount(natAmountObj);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts])

  useEffect(() => {
    const newContactsList = []
    if (filterOptionItem !== 'clear') {
      contacts.forEach(contact => {
        if (contact[filterOption] === filterOptionItem) {
          newContactsList.push(contact);
        }
      });
      setContactsList(getSortedContacts(newContactsList, sortOption));
    } else {
      setContactsList(getSortedContacts(contacts, sortOption));
    }
    history.push(`/contacts/1`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOptionItem]);

  const copyData = (e) => {
    const copiedData = e.target.getAttribute('value');
    copy(copiedData);
  }
  useEffect(() => {
    if (sortOption === 'default') {
      setContactsList(contacts);
    } else {
      setContactsList(getSortedContacts(contactsList, sortOption));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOption]);
  const amountByNationality = (
    <Popover id="sort-popup-item" className={'popOverNatAmount'}>
      {Object.keys(natAmount).map(item => (
        <span key={item} className={'nat-amount-item'}>{item}: {natAmount[item]}</span>
      ))}
    </Popover>
  )
	return (
    <>
      <Header
        setSortOption={setSortOption}
        sortOption={sortOption}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        filterOptionItem={filterOptionItem}
        setFilterOptionItem={setFilterOptionItem}
        filterObject={filterObject}
        updateContacts={updateContacts}
      />
      {loading ? (
        <div className={'page page--contacts'}>
          <div className={'spinner-container'}>
            <Spinner
              animation="border"
              role="status"
            />
          </div>
        </div>
      ) : (
        <div className={'page page--contacts'}>
          {view === 'table' ? (
            <Table contacts={contactsList} page={page} copyData={copyData}/>
          ) : (
            <Tiles contacts={contactsList} page={page} copyData={copyData}/>
          )}
          <div className={'contacts-footer'}>
            <div className={'left-side'}>
              <span className={'stat'}>Total: {contacts.length}</span>
              <span className={'stat'}>Male: {male}</span>
              <span className={'stat'}>Female: {female}</span>
              <span className={'stat'}>Undecided: {undecided}</span>
              <OverlayTrigger trigger="click" placement="top" overlay={amountByNationality} rootClose>
                <span className={'stat stat--amount'}>Amount by nationality</span>
              </OverlayTrigger>
            </div>
            <Pagination
              contacts={contactsList}
              page={page}
              amount={contactsList.length}
              setView={setView}
              view={view}
            />
          </div>
        </div>
      )}
    </>
	);
};

export { View };
