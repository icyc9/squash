require('../spec/helper.js')
Agent = require('./').Agent

describe('Agent', function () {
  this.timeout(9000)
  subject = new Agent

  url = 'http://www.finishline.com/store/product/?id=prod783903'

  context('when calling as function', function () {
    it('throws an exception', function () {
      expect( Agent ).to.throw('Must instantiate using "new" keyword')
    })
  })

  // describe('user(agent)', function () {
  //   var agent = 'chrome'

  //   it('changes the user agent', function (done) {
  //     subject
  //     .get(url)
  //     .end(function () {
  //       done()
  //     })
  //   })
  // })

  // describe('.cookies(acces)', function () {
  //   var access = { domain: '.finishline.com' }

  //   it('persists cookies for all subsequent requests', function (done) {
  //     subject
  //     .get(url)
  //     .end(function () {
  //       var cookies = subject.cookies(access)
  //       expect( cookies ).to.not.be.empty

  //       subject.get(url)
  //       .end(function () {
  //         expect( cookies ).to.eq( arguments[1].req._headers['cookie'] )

  //         done()
  //       })
  //     })
  //   })
  // })
})
