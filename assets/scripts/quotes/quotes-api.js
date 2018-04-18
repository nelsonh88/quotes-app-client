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

const updateQuote = function (data, quoteid) {
  console.log(quoteid)
  const quoteTarget = 'data.quote.' + quoteid
  return $.ajax({
    url: config.apiUrl + '/quotes/' + quoteTarget,
    method: 'PATCH',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteQuote = function (id) {
  return $.ajax({
    url: config.apiUrl + '/quotes/' + id,
    method: 'DELETE',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addQuote = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/quotes',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createQuote,
  indexQuotes,
  showQuote,
  updateQuote,
  deleteQuote,
  addQuote

}
