/* eslint-disable no-unused-vars */
const shell = require('shelljs');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    shell.exec(`echo ${data.text} >> /dev/usb/lp0`);
    return {
      text: `Message "${data.text}" is printed`
    }


  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
