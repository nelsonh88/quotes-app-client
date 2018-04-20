'use strict'

const api = require('./quotes-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./quotes-ui')
const authEvents = require('../auth/auth-events')
const authUi = require('../auth/auth-ui')

const onCreateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createQuote(data)
    .then(ui.createQuoteSuccess)
    .then(api.indexQuotes)
    .then(ui.indexQuotesSuccessNoMessage)
    .catch(ui.createQuoteFailure)
}

const onIndexQuotes = function (event) {
  event.preventDefault()
  api.indexQuotes()
    .then(ui.indexQuotesSuccess)
    .catch(ui.indexQuotesFailure)
}

const onAllQuotes = function (event) {
  event.preventDefault()
  authEvents.onShowAllUsers()
  $('.user').show()
  $('#all-quotes').hide()
  $('#index-quotes').show()
  $('.add-quote').show()
}

const onShowQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const quote = data.quote
  // console.log(event)
  api.showQuote(quote.id)
    .then(ui.showQuoteSuccess)
    .catch(ui.showQuoteFailure)
}

const onUpdateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  api.updateQuote(data, id)
    .then(ui.updateQuoteSuccess)
    .then(api.indexQuotes)
    .then(ui.indexQuotesSuccessNoMessage)
    .catch(ui.updateQuoteFailure)
}

const onDeleteQuote = function (event) {
  const confirmDelete = confirm('Are you sure you want to delete this quote?')
  if (confirmDelete !== true) {
    return
  }
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = event.target.dataset.id
  const quote = data.quote
  api.deleteQuote(id)
    .then(ui.deleteQuoteSuccess)
    .then(api.indexQuotes)
    .then(ui.indexQuotesSuccessNoMessage)
    .catch(ui.deleteQuoteFailure)
}

const onAddQuote = function (event) {
  event.preventDefault()
  const data = {quote: {quote: event.target.dataset.quote, author: event.target.dataset.author}}
  api.addQuote(data)
    .then(ui.addQuoteSuccessful)
    // .then(() => onCreate(event))
    .catch(ui.addQuoteFailure)
}

const addHandlers = () => {
  $('#create-quote').on('submit', onCreateQuote)
  $('#index-quotes').on('click', onIndexQuotes)
  $('#all-quotes').on('click', onAllQuotes)
  $('#show-quote').on('submit', onShowQuote)
  $('#update-quote').on('submit', onUpdateQuote)
  $('#delete-quote').on('submit', onDeleteQuote)
  $('#content').on('click', '.delete-quote', onDeleteQuote)
  $('#content').on('click', '.update-quote', function (event) {
    const quoteid = event.target.dataset.id
    $('#update-quote').attr('data-id', quoteid)
  })
  $('#content').on('click', '.add-quote', onAddQuote)
}

module.exports = {
  addHandlers
}
