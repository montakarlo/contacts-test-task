import './style.scss';
import React from 'react';
import { SortOption } from 'components/contacts/sortoptions'
import { FilterOption } from 'components/contacts/filteroptions'

const View = ({ setSortOption, sortOption, filterOption, setFilterOption,
  filterOptionItem, setFilterOptionItem, filterObject, updateContacts }) => {
  return(
    <div className={'contacts-header'}>
      <button
        type='button'
        className={'update'}
        onClick={updateContacts}
      >
        Update contacts
      </button>
      <div className={'header-container'}>
        <FilterOption
          filterOption={filterOption}
          setFilterOption={setFilterOption}
          filterOptionItem={filterOptionItem}
          setFilterOptionItem={setFilterOptionItem}
          filterObject={filterObject}
        />
        <SortOption
          setSortOption={setSortOption}
          sortOption={sortOption}
        />
      </div>
    </div>
  )
};

export { View };
