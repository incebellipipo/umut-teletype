// Initializes the `pos` service on path `/pos`
const createService = require('./pos.class.js');
const hooks = require('./pos.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pos', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('pos');

  service.hooks(hooks);
};
