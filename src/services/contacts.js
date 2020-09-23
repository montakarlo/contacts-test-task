export const getContacts = async ({ page, amount }) => {
  const response = await fetch(`https://randomuser.me/api/1.3/?page=${page}&results=${amount}&seed=abc&exc=login,id,cell,registered`).then(contacts => contacts.json());
  return response['results'];
};
