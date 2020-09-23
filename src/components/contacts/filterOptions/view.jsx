import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCheck } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const View = ({ setFilterOption, filterOption, setFilterOptionItem, filterOptionItem,
  filterObject }) => {
  const filterOptions = {
    gender: 'gender',
    name: 'name',
    nat: 'nationality',
    clear: 'clear'
  };

  const clearFilter = () => {
    setFilterOptionItem('clear')
    setFilterOption('clear')
    document.body.click();
  }
  const filterPopoverItem = (
    <Popover id="sort-popup-item" className={'popOverFilterOptions'}>
      {filterOption !== 'clear' && (
        <div className={'filter-options-container'}>
          {filterObject[filterOption].map(optionItem => (
            <button
              key={optionItem}
              id={optionItem}
              className={'optionsSelect'}
              onClick={() => setFilterOptionItem(optionItem)}
              type="button"
            >
              <span className={'option'}>{optionItem}</span>
              {filterOptionItem === optionItem && <FontAwesomeIcon icon={faCheck} size="sm" />}
            </button>
          ))}
        </div>
      )}
    </Popover>
  )

  const filterPopover = (
    <Popover id="sort-popup" className={'popOverFilterOptions'}>
      {
        Object.keys(filterOptions).map(key => (
          <div key={key}>
            {key !== 'clear' ? (
              <OverlayTrigger trigger="click" placement="left-start" overlay={filterPopoverItem} rootClose>
                <button
                  id={key}
                  className={'optionsSelect'}
                  onClick={() => setFilterOption(key)}
                  type="button"
                >
                  <span className={'option'}>{filterOptions[key]}</span>
                  {key === filterOption && <FontAwesomeIcon icon={faCheck} size="sm" />}
                </button>
              </OverlayTrigger>
            ) : (
              <button
                id={key}
                className={'optionsSelect'}
                onClick={clearFilter}
                type="button"
              >
                <span className={'option'}>{filterOptions[key]}</span>
                {key === filterOption && <FontAwesomeIcon icon={faCheck} size="sm" />}
              </button>
            )}
          </div>
        ))
      }
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={filterPopover} rootClose>
      <button type="button" className={'filterBtn button-unstyled'}>
        <FontAwesomeIcon icon={faSort} size="lg" />
        {filterOptions[filterOption] === filterOptions.clear ? <span>Filter by</span> : <span>{`Filter by: ${filterOptions[filterOption]}`}</span>}
      </button>
    </OverlayTrigger>
  );
};

export { View };
