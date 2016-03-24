'use strict'

process.env.NODE_ENV = 'test'

global.context = describe

var chai = require('chai')
global.assert = chai.assert
global.expect = chai.expect

chai.use(require('chai-as-promised'))

// used for express mocking
global.httpMocks = require('node-mocks-http')

beforeEach(function (done) {
  module.exports.connect();
  return done();
});

afterEach(function (done) {
 return done();
});

module.exports.nock = function(options) {
  console.log('Mocking out HTTP Requests with nock')

  var nock = require('nock')

  var url      = options.url || 'http://example.com';
  var uri      = options.uri || '/';
  var method   = (options.method  || 'GET').toLowerCase();
  var status   = options.status   || 200;
  var response = options.response || {};

  nock(url).get(uri)
  .reply(status, response);
};

module.exports.connect = function() {
  var nock = require('nock')

  nock.enableNetConnect()
};
