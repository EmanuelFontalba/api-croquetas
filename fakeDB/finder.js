const users = require('./users');

const findUsers = (key, value) => {
  const result = users.filter(user => user[key] === value);

  if (!result) return undefined;
  if (result.length > 1) return result;
  return result[0];
};

module.exports = findUsers;
