var Squash = require('../')

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
    var username = "d0005496"
    var password = "Newtyn123"
    it('Successfully logins in', function (done) {
      subject.login(username, password)
      .then(function (success) {
        expect(success).to.equal(true)
        done()
      })
    })
  })
  describe('.reserve(time)', function () {
    var time = "9:15 AM"
    var date = "3/26/2016"
    it('Successfully makes a reservation', function (done) {
      subject.reserve(time, date)
      .then(function (success) {
        expect(success).to.equal(true)
        done()
      })
    })
  })
})