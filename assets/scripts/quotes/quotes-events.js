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

const addHandlers = () => {
  $('#create-quote').on('submit', onCreateQuote)
  // $('#get-quotes').on('submit', onGetQuotes)
  // $('#get-quote').on('submit', onGetQuote)
  // $('#update-quote').on('submit', onUpdateQuote)
  // $('#delete-quote').on('submit', onDeleteQuote)
}

module.exports = {
  addHandlers
}
