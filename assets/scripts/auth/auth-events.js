'use strict'

const api = require('./auth-api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./auth-ui')

const onSignUp = function () {
  event.preventDefault()
  // event.target is the same as this in the parameter below
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function () {
  event.preventDefault()
  // event.target is the same as this in the parameter below
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  $('#all-quotes').trigger('click')
  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    // .then(onShowAllUsers(null))
    .catch(ui.signOutFailure)
}

const onShowAllUsers = function (event) {
  // let data
  // if (event !== undefined) {
  //   event.preventDefault()
  //   data = getFormFields(event.target)
  // }
  // else { data = '' }
  api.index()
    .then(ui.allUsersSuccess)
    .catch(ui.allUserFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#index-users').on('submit', onShowAllUsers)
  onShowAllUsers()
}

module.exports = {
  addHandlers,
  onShowAllUsers
}
