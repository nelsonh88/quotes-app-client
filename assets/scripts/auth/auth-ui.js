'use strict'
const pageMessage = $('#message')
const signUpModal = $('#sign-up-modal')
const signInModal = $('#sign-in-modal')

const store = require('../store')
const userTemplate = require('../templates/users-quotes.handlebars')
// above is for the token as well

const signUpSuccess = function (data) {
  generateMessage('Signed up Successfully!', 'success')
  $('#sign-up-modal').modal('hide')
  console.log(data)
}

const signUpFailure = function (error) {
  console.log(error)
  generateMessage('Error on signing up!', 'danger')
  $('#sign-up-modal').modal('hide')
}

const signInSuccess = function (data) {
  generateMessage('Signed in Successfully!', 'success')
  $('#sign-in-modal').modal('hide')
  $('#quotes-actions').show()
  $('body').addClass('signed-in')

  console.log(data)
  // below is for the token
  store.user = data.user
  localStorage.setItem('userid', data.user.id)
  welcomeText(data)
  $('.user').show()
}

const signInFailure = function (error) {
  console.log(error)
  generateMessage('Error on signing in!', 'danger')
  $('#sign-in-modal').modal('hide')
}

const changePasswordSuccess = function (data) {
  generateMessage('Successfully changed password!', 'success')
  $('#change-password-modal').modal('hide')
}

const changePasswordFailure = function (error) {
  console.log(error)
  generateMessage('Error on changing password!', 'danger')
  $('#change-password-modal').modal('hide')
}

const signOutSuccess = function (data) {
  console.log('signed out big dawg')
  $('body').removeClass('signed-in')
  $('#quotes-actions').hide()
  byeText()
  $('#content').hide()
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('#message').delay(3000).slideToggle()
}

const allUsersSuccess = function (data) {
  console.log('data is ', data)
  const showUsersQuotesHtml = userTemplate({users: data.users})
  $('#content').html(showUsersQuotesHtml)
}

const welcomeText = function (data) {
  const newLede = `Welcome ${data.user.first_name}! Below you will find options to get your quotes and create quotes`
  $('.lede').text(newLede)
}

const byeText = function () {
  const newLede = 'Thank you, you have been successfully logged out. Stay motivated!!'
  $('.lede').text(newLede)
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  allUsersSuccess,
  welcomeText
}
