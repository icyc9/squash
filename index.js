var cheerio = require('cheerio')
var Promise = require('bluebird')
var webdriverio = require('webdriverio')

var squash = function (options) {
  this._driver = webdriverio
    .remote(options)
    .init()
    .windowHandleSize({width:1000,height:768})
}

squash.prototype.reserve = Promise.promisify(function (time, date, resolve) {
  var driver = this._driver

  driver
  .url('http://www.yaleclubnyc.org/Default.aspx?p=DynamicModule&pageid=387910&ssid=&vnf=1')
  .execute('window.time = "' + time + '"')
  .execute('window.date = "' + date + '"')
  .execute(function (time) {

    var slot_col = document.getElementsByClassName('rbm_SlotCol')
    var slot_alt = document. getElementsByClassName('rbm_SlotAltRow')
    var selected_date = document.getElementsByClassName("currdate")[0].children[0].innerHTML
    var time = window.time
    var date = window.date
    var requested_time_slot;

    if(selected_date !== date) {
      changeDate(date)
    }

    var observer = new MutationObserver(function (mutations, me) {
      var spinner = document.getElementById('divLoadingImage').style.display
      if (spinner === 'none') {
        make_reservation();
        me.disconnect(); // stop observing
        return;
      }
    });

    // start observing
    observer.observe(document, {
      childList: true,
      subtree: true
    });

    function make_reservation () {
      for (_index in slot_col) { 
        if(!slot_col[_index].children)
          continue;
        if((slot_col[_index].children[0].innerText).indexOf(time) > -1) {
          requested_time_slot = slot_col[_index]
        }
      }
      for (_index in slot_alt) {
        if(!slot_alt[_index].children)
          continue;
        if((slot_alt[_index].children[0].innerText).indexOf(time) > -1) {
          requested_time_slot = slot_alt[_index]
        }
      }


      var parent = requested_time_slot.children[0].parentElement.parentElement
      var children = Array.prototype.slice.call(parent.children, 1)
      var court = 199


   
      for(child in children) {
        var element_class = children[child].className
        if(element_class === 'rbm_OpenAltCol' || 'rbm_OpenCol') {
          window.LaunchLockedReserver(window,event,'54', court, window.date, window.time,'2');
          break;        
        }
        court++
      }
    }
  })

  resolve(null, true)
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
  .then(function () {
    resolve(null, true)
  })
})

module.exports = squash