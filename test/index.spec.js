var Squash = require('../lib')
var config = require('../config')

describe('Squash', function () {
  this.timeout(20000)
  var options = {
    desiredCapabilities: {
      browserName: 'chrome',
      version: '27.0'
    }
  }

  var subject = new Squash(options)

  describe('.login(username, password)', function () {
    var username = config.yaleclub.username
    var password = config.yaleclub.password
    it('Successfully logins in', function (done) {
      subject.login(username, password)
      .then(function (success) {
        expect(success).to.equal(true)
        done()
      })
    })
  })
  describe('.reserve(time)', function () {
    var time = "8:30 AM"
    var date = "4/9/2016"
    it('Successfully makes a reservation', function (done) {
      subject.reserve(time, date)
      .then(function (success) {
        expect(success).to.equal(true)
        done()
      })
    })
  })
})