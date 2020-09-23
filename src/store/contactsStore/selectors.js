import { createSelector } from 'reselect';

const _getAppState = (state) => state.contacts;

export const getAppState = createSelector(
	[_getAppState],
	(contacts) => contacts,
);
