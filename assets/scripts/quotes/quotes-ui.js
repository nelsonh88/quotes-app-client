'use strict'

const pageMessage = $('#message')
const ownedQuotesTemplate = require('../templates/owned-quotes.handlebars')
const store = require('../store')
// above is for the token as well

const createQuoteSuccess = function (data) {
  generateMessage('Created Quote Successfully!', 'success')
  $('#create-quote-modal').modal('hide')
  $('form').trigger('reset')

  goTop()
}

const createQuoteFailure = function () {
  generateMessage('Error On Creating Quote!', 'danger')
  $('form').trigger('reset')
  goTop()
}

const indexQuotesSuccess = function (data) {
  generateMessage('Got Your Quotes Successfully!', 'success')
  $('.show-my-quotes').hide()
  $('#index-quotes').hide()
  $('#all-quotes').show()
  $('.create-a-quote').show()
  const showUsersOwnedQuotesHtml = ownedQuotesTemplate({quotes: data.quotes})
  $('#content').html(showUsersOwnedQuotesHtml)
  goTop()
}

const indexQuotesFailure = function (error) {
  generateMessage('Error On Getting Your Quotes!', 'danger')
  console.error(error)
  goTop()
}

const showQuoteSuccess = function (data) {
  generateMessage('Retieved A Quote Successfully!', 'success')
}

const showQuoteFailure = function () {
  generateMessage('Error on Retrieving a Quote!', 'danger')
}

const updateQuoteSuccess = function (data) {
  generateMessage('Updated Quote Successfully!', 'success')
  $('#update-quote-modal').modal('hide')
  $('form').trigger('reset')
  goTop()
}

const updateQuoteFailure = function (error) {
  generateMessage('Error On Updating Quote!', 'danger')
  console.error(error)
  $('#update-quote-modal').modal('hide')
  $('form').trigger('reset')
  goTop()
}

const deleteQuoteSuccess = function (data) {
  generateMessage('Deleted Quote Successfully!', 'success')
  goTop()
}

const deleteQuoteFailure = function (error) {
  generateMessage('Error On Deleting Quote!', 'danger')
  console.error(error)
  goTop()
}

const indexQuotesSuccessNoMessage = function (data) {
  const showUsersOwnedQuotesHtml = ownedQuotesTemplate({quotes: data.quotes})
  $('#content').html(showUsersOwnedQuotesHtml)
}

const addQuoteSuccessful = function (data) {
  generateMessage('Added Quote To MyQuotes Successfully!', 'success')
  store.quote = data.quote
  goTop()
}

const addQuoteFailure = function () {
  generateMessage('Error on Adding Quote!', 'danger')
  goTop()
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

const goTop = function () {
  $('html, body').animate({ scrollTop: 0 }, 'fast')
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
