var Squash = require('../')
var Agent = require('../agents').Agent

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
})