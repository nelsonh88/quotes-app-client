'use strict'

const config = require('../config')
const store = require('../store')

const createQuote = function (data) {
  return $.ajax({
    url: config.apiUrl + '/quotes',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createQuote

}
