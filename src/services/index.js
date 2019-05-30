const pos = require('./pos/pos.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pos);
};
