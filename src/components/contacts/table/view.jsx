import './style.scss';
import React from 'react';
import { Table } from 'react-bootstrap'
import { CopyTooltip } from 'components/contacts/copytooltip'
import { v4 as uuidv4 } from 'uuid';

const View = ({ contacts, page, copyData }) => {
	return (
    <div className={'table'}>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th className={'header__item header__item--avatar'}></th>
            <th className={'header__item header__item--name'}>Name</th>
            <th className={'header__item header__item--phone'}>Phone</th>
            <th className={'header__item header__item--email'}>Email</th>
            <th className={'header__item header__item--location'}>Location</th>
            <th className={'header__item header__item--dob'}>DOB</th>
            <th className={'header__item header__item--gender'}>Gender</th>
            <th className={'header__item header__item--nationality'}>Nat</th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(page*10 - 10, page*10).map(contact => (
            <tr
              key={uuidv4()}
            >
              <td className={'cell cell--avatar'}>
                <img
                  className={'avatar'}
                  src={contact.picture.thumbnail}
                  alt="avatar"
                />
              </td>
              <td className={'cell'}>{contact.name}</td>
              <td
                className={'cell'}
              >
                <CopyTooltip>
                  <span
                    className={'cell__item'}
                    value={contact.phone}
                    onClick={e => copyData(e)}    
                  >
                    {contact.phone}
                  </span>
                </CopyTooltip>
              </td>
              <td
                className={'cell'}
              >
                <CopyTooltip>
                  <span
                    className={'cell__item'}
                    value={contact.email}
                    onClick={e => copyData(e)}    
                  >
                    {contact.email}
                  </span>
                </CopyTooltip>
              </td>
              <td className={'cell'}>{contact.location.country}<br />{contact.location.address}</td>
              <td className={'cell'}>{contact.dob}</td>
              <td className={'cell'}>{contact.gender}</td>
              <td className={'cell'}>{contact.nat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
	);
};

export { View };