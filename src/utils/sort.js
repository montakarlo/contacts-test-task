const sortByAToZName = (contact1, contact2) => {
  const name1 = contact1.name.toLowerCase();
  const name2 = contact2.name.toLowerCase();
  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0;
};

const sortByZToAName = (contact1, contact2) => {
  const name1 = contact1.name.toLowerCase();
  const name2 = contact2.name.toLowerCase();
  if (name1 > name2) return -1;
  if (name1 < name2) return 1;
  return 0;
};

export const getSortedContacts = (contacts, sortOption) => {
  switch (sortOption) {
    case 'aToZ':
      return [...contacts].sort(sortByAToZName);
    case 'zToA':
      return [...contacts].sort(sortByZToAName);
    default:
      return contacts;
  }
};
