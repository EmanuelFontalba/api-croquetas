const users = require('./users');

const findUsers = (key, value) => {
  if (!key || !value) return users;
  const result = users.filter(user => user[key] === value);

  if (!result) return undefined;
  if (result.length > 1) return result;
  return result[0];
};

const addUser = user => {
  const userId = users[users.length - 1].id + 1;

  users.push({ id: userId, ...user });
};

const removeUser = userId => {
  const userToRemove = findUsers('id', userId);
  users.splice(users.indexOf(userToRemove), 1);
};

const findIndex = userId => {
  const userToSearch = findUsers('id', userId);
  return users.indexOf(userToSearch);
};

module.exports = { findUsers, addUser, removeUser, findIndex };
