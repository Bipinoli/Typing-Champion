const { getLogger } = require('../../global/singleton');


const attachTest = async (req, res, next) => {
  getLogger().info('attaching middleware test successful 👍');
  return next();
};

module.exports = attachTest;

