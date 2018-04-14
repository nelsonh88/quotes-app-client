'use strict'

const api = require('./quotes-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./quotes-ui')

const onCreateQuote = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createQuote(data)
    .then(ui.createQuoteSuccess)
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

const addHandlers = () => {
  $('#create-quote').on('submit', onCreateQuote)
  $('#index-quotes').on('submit', onIndexQuotes)
  $('#show-quote').on('submit', onShowQuote)
  // $('#update-quote').on('submit', onUpdateQuote)
  // $('#delete-quote').on('submit', onDeleteQuote)
}

module.exports = {
  addHandlers
}
