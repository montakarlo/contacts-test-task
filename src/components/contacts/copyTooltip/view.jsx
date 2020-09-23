import './style.scss';
import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap'

const View = ({ children }) => {
  const copyTooltip = (
    <Popover id="copyTooltip" className={'popOverWindow'}>
      <span>
        Click to copy
      </span>
    </Popover>
  );
	return (
    <OverlayTrigger
      trigger={['hover', 'hover']}
      delay={{ show: 200, hide: 100 }}
      placement="bottom"
      overlay={copyTooltip}
    >
      {children}
    </OverlayTrigger>
	);
};

export { View };