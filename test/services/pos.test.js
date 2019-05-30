const assert = require('assert');
const app = require('../../src/app');

describe('\'pos\' service', () => {
  it('registered the service', () => {
    const service = app.service('pos');

    assert.ok(service, 'Registered the service');
  });
});
