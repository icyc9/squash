var cheerio = require('cheerio')
var Promise = require('bluebird')

var squash = function (agent) {
  this._agent = agent
}

squash.prototype.reserve = Promise.promisify(function (time, resolve) {
  var agent = this._agent
  var self = this
  var url = "http://www.google.com"

  agent
  .get(url)
  .then(function (response) {
    if(!response.body) return resolve(error)
      resolve(null, null)
  })
})


module.exports = squash