import './style.scss';
import React from 'react';
import { CopyTooltip } from 'components/contacts/copytooltip'
import { v4 as uuidv4 } from 'uuid';

const View = ({ contacts, page, copyData }) => {
	return (
    <div className={'tiles'}>
      {contacts.slice(page*10 - 10, page*10).map(contact => (
        <div key={uuidv4()} className={'card'}>
          <span className={'row'}>
            <span className={'row__title'}>Name:&#160;</span>
            {contact.name}
          </span>
          <span className={'row'}>
            <span className={'row__title'}>Phone:&#160;</span>
            <CopyTooltip>
              <span
                className={'row__data'}
                value={contact.phone}
                onClick={e => copyData(e)}    
                >
                {contact.phone}
              </span>
            </CopyTooltip>
          </span>
          <span className={'row'}>
            <span className={'row__title'}>Email:&#160;</span>
            <CopyTooltip>
              <span
                className={'row__data'}
                value={contact.email}
                onClick={e => copyData(e)}    
                >
                {contact.email}
              </span>
            </CopyTooltip>
          </span>
          <span className={'row'}>
            <span className={'row__title'}>Address:&#160;</span>
            {contact.location.country}<br />{contact.location.address}
          </span>
          <span className={'row'}>
            <span className={'row__title'}>DOB:&#160;</span>
            {contact.dob}
          </span>
          <span className={'row'}>
            <span className={'row__title'}>Genger:&#160;</span>
            {contact.gender}
          </span>
          <span className={'row'}>
            <span className={'row__title'}>Nationality:&#160;</span>
            {contact.nat}
          </span>
        </div>
      ))}
    </div>
	);
};

export { View };
