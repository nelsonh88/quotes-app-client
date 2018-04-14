'use strict'

const store = require('../store')
// above is for the token as well

const createQuoteSuccess = function (data) {
  $('#message').text('Created Quote Successfully!')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const createQuoteFailure = function (error) {
  console.log(error)
  $('#message').text('Error on creating quote!')
  $('#message').css('background-color', 'red')
}

module.exports = {
  createQuoteSuccess,
  createQuoteFailure
}
