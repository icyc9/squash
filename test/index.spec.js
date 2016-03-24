var Squash = require('../')
var Agent = require('../agents').Agent

describe('Squash', function () {
  describe('.reserve(time)', function () {
    var time = new Date
    var agent = new Agent
    var subject = new Squash(agent)
    it('Successfully reserves a table', function (done) {
      subject.reserve(agent)
      .then(function (err) {
        expect(err).to.be.null
        done()
      })
    })
  })
})