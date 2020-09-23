import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCheck } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const View = ({ setSortOption, sortOption }) => {
  const sortOptions = {
    aToZ: 'A to Z',
    zToA: 'Z to A',
    default: 'Default'
  };

  const onClickHandler = (key) => {
    setSortOption(key);
    document.body.click();
  };

  const popover = (
    <Popover id="sort-popup" className={'popOverOptions'}>
      {
        Object.keys(sortOptions).map(key => (
          <button
            id={key}
            key={key}
            className={'optionsSelect'}
            onClick={() => onClickHandler(key)}
            type="button"
          >
            <span className={'option'}>{sortOptions[key]}</span>
            {key === sortOption && <FontAwesomeIcon icon={faCheck} size="sm" />}
          </button>
        ))
      }
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
      <button type="button" className={'sortBtn button-unstyled'}>
        <FontAwesomeIcon icon={faSort} size="lg" />
        <span>{`Sort: ${sortOptions[sortOption]}`}</span>
      </button>
    </OverlayTrigger>
  );
};

export { View };
