import './style.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const View = ({ contacts, amount, page, setView, view, collection }) => {
  const history = useHistory();
  let items = [];
  items.push(
    <Pagination.First key="pagination-first" onClick={() => history.push(`/contacts/1`)}/>,
    <Pagination.Prev key="pagination-prev"  onClick={() => {
      if (page !== 1) {
        history.push(`/contacts/${page - 1}`)
      }
    }}/>
  )
  for (let number = 1; number <= Math.trunc(amount/10) + 1; number++) {
    if (amount/10 + 1 >= 5) {
      if ([page - 2, page - 1, page, page + 1, page + 2].includes(number) && contacts.slice(number*10 - 10, number*10).length ) {
        items.push(
          <Pagination.Item key={number} active={number === page} onClick={() => history.push(`/contacts/${number}`)}>
            {number}
          </Pagination.Item>
        );
      }
    } else {
      items.push(
        <Pagination.Item key={number} active={number === page} onClick={() => history.push(`/contacts/${number}`)}>
          {number}
        </Pagination.Item>
      )
    }
    if (number === Math.trunc(amount/10) + 1) {
      items.push(
        <Pagination.Next key="pagination-next" onClick={() => {
          if (page !== Math.trunc(amount/10) + 1) {
            history.push(`/contacts/${page + 1}`)
          }
        }}/>,
        <Pagination.Last key="pagination-last" onClick={() => history.push(`/contacts/${Math.trunc(amount/10) + 1}`)}/>
      )
    }
  }
  return(
    <div className={'left-side'}>
      <button
        type='button'
        className={'change-view'}
        onClick={() => setView('tiles')}
      >
        {view === 'table' ? 'Switch to tiles view' : 'Switch to  table view'}
      </button>
      <Pagination>
        {items}
      </Pagination>
    </div>
  )
};

export { View };
