'use strict'

const ownedQuotesTemplate = require('../templates/owned-quotes.handlebars')
// const store = require('../store')
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

const indexQuotesSuccess = function (data) {
  $('#message').text('Retrieved all quotes!')
  $('#message').css('background-color', 'green')
  console.log('index is ', data.quotes)
  const showUsersOwnedQuotesHtml = ownedQuotesTemplate({quotes: data.quotes})
  $('#content').html(showUsersOwnedQuotesHtml)

  console.log('successfully got all quotes')
}

const indexQuotesFailure = function (error) {
  $('#message').text('Error on getting all quotes')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const showQuoteSuccess = function (data) {
  $('#message').text('Retrieved the quote!')
  $('#message').css('background-color', 'green')
  console.log(data)

  console.log('successfully got one quote')
}

const showQuoteFailure = function (error) {
  $('#message').text('Error on getting one quote')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const updateQuoteSuccess = function (data) {
  $('#message').text('Updated quote!')
  $('#message').css('background-color', 'green')
  console.log(data)

  console.log('successfully updated quote')
}

const updateQuoteFailure = function (error) {
  $('#message').text('Error on updating quote')
  $('#message').css('background-color', 'red')
  console.error(error)
}

const deleteQuoteSuccess = function (data) {
  $('#message').text('Deleted quote!')
  $('#message').css('background-color', 'green')

  console.log('successfully deleted quote')
}

const deleteQuoteFailure = function (error) {
  $('#message').text('Error on deleting quote')
  $('#message').css('background-color', 'red')
  console.error(error)
}
module.exports = {
  createQuoteSuccess,
  createQuoteFailure,
  indexQuotesSuccess,
  indexQuotesFailure,
  showQuoteSuccess,
  showQuoteFailure,
  updateQuoteSuccess,
  updateQuoteFailure,
  deleteQuoteSuccess,
  deleteQuoteFailure
}
