var cheerio = require('cheerio')
var Promise = require('bluebird')
var webdriverio = require('webdriverio')

var squash = function (options) {
  this._driver = webdriverio
    .remote(options)
    .init()
    .windowHandleSize({width:1000,height:768})
}

squash.prototype.reserve = Promise.promisify(function (time, resolve) {
  var driver = this._driver

})

squash.prototype.login = Promise.promisify(function (username, password, resolve) {

  var driver = this._driver
  
  var log = console.log

  driver
  .url('http://www.yaleclubnyc.org/default.aspx?p=home&E=0')
  .setValue('.advLogUsername', username)
  .setValue('.advLogPassword', password)
  .click('#btnSecureLogin')
  .waitForExist('#ulMenuItem_318484', 20000)
  .end()
  .then(function () {
    resolve(null, true)
  })
})

module.exports = squash