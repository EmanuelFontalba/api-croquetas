const getStatus = (req, res, next) => {
  res.send('Status checked');
};

module.exports = { getStatus };
