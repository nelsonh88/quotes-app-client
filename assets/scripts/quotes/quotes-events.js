'use strict'

const api = require('./quotes-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./quotes-ui')

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
  api.updateQuote(data)
    .then(ui.updateQuoteSuccess)
    .then(api.indexQuotes)
    .then(ui.indexQuotesSuccessNoMessage)
    .catch(ui.updateQuoteFailure)
}

const onDeleteQuote = function (event) {
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

const addHandlers = () => {
  $('#create-quote').on('submit', onCreateQuote)
  $('#index-quotes').on('submit', onIndexQuotes)
  $('#show-quote').on('submit', onShowQuote)
  $('#update-quote').on('submit', onUpdateQuote)
  $('#delete-quote').on('submit', onDeleteQuote)
  $('#content').on('click', '.delete-quote', onDeleteQuote)
}

module.exports = {
  addHandlers
}
