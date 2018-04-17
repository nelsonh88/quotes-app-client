'use strict'

const pageMessage = $('#message')
const ownedQuotesTemplate = require('../templates/owned-quotes.handlebars')
const store = require('../store')
// above is for the token as well

const createQuoteSuccess = function (data) {
  generateMessage('Created Quote Successfully!', 'success')
  console.log(data)
}

const createQuoteFailure = function (error) {
  console.log(error)
  generateMessage('Error On Creating Quote!', 'danger')
}

const indexQuotesSuccess = function (data) {
  generateMessage('Got Your Quotes Successfully!', 'success')
  console.log('index is ', data.quotes)
  const showUsersOwnedQuotesHtml = ownedQuotesTemplate({quotes: data.quotes})
  $('#content').html(showUsersOwnedQuotesHtml)
  console.log('successfully got all quotes')
}

const indexQuotesFailure = function (error) {
  generateMessage('Error On Getting Your Quotes!', 'danger')
  console.error(error)
}

const showQuoteSuccess = function (data) {
  generateMessage('Retieved A Quote Successfully!', 'success')
  console.log(data)

  console.log('successfully got one quote')
}

const showQuoteFailure = function (error) {
  generateMessage('Error on Retrieving a Quote!', 'danger')
  console.error(error)
}

const updateQuoteSuccess = function (data) {
  generateMessage('Updated Quote Successfully!', 'success')
  console.log(data)

  console.log('successfully updated quote')
}

const updateQuoteFailure = function (error) {
  generateMessage('Error On Updating Quote!', 'danger')
  console.error(error)
}

const deleteQuoteSuccess = function (data) {
  generateMessage('Deleted Quote Successfully!', 'success')

  console.log('successfully deleted quote')
}

const deleteQuoteFailure = function (error) {
  generateMessage('Error On Deleting Quote!', 'danger')
  console.error(error)
}

const indexQuotesSuccessNoMessage = function (data) {
  const showUsersOwnedQuotesHtml = ownedQuotesTemplate({quotes: data.quotes})
  $('#content').html(showUsersOwnedQuotesHtml)
  console.log('successfully got all quotes')
}

const addQuoteSuccessful = function (data) {
  console.log(data)
  generateMessage('Added Quote Successfully!', 'success')
  store.quote = data.quote
}

const addQuoteFailure = function (error) {
  console.log(error)
  generateMessage('Error on Adding Quote!', 'danger')
}

const generateMessage = function (messageText, alertType) {
  $('body').addClass('hasMessage')
  pageMessage.text(messageText)
  const alertStyle = 'alert-' + alertType
  pageMessage.removeClass().addClass(alertStyle).show()
  pageMessage.delay(3000).slideToggle(400, function () {
    $('body').removeClass('hasMessage')
  })
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
  deleteQuoteFailure,
  indexQuotesSuccessNoMessage,
  addQuoteSuccessful,
  addQuoteFailure
}
