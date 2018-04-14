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

const indexQuotes = function () {
  return $.ajax({
    url: config.apiUrl + '/quotes',
    method: 'GET',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showQuote = function (id) {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + id,
    method: 'GET',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createQuote,
  indexQuotes,
  showQuote

}
