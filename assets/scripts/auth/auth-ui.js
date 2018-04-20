'use strict'
const pageMessage = $('#message')
const signUpModal = $('#sign-up-modal')
const signInModal = $('#sign-in-modal')

const store = require('../store')
const userTemplate = require('../templates/users-quotes.handlebars')
// above is for the token as well

const signUpSuccess = function (data) {
  generateMessage('Signed up Successfully! Please Sign-In', 'success')
  $('#sign-up-modal').modal('hide')
  $('#sign-up-button').hide()
  goTop()
  $('form').trigger('reset')
  const newLede = `Welcome ${data.user.first_name}! Thank you for signing up. Please sign in to let MotivationQ motivate you!`
  $('.lede').text(newLede)
}

const signUpFailure = function () {
  generateMessage('Error on signing up!', 'danger')
  $('#sign-up-modal').modal('hide')
  goTop()
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  generateMessage('Signed in Successfully!', 'success')
  $('#sign-in-modal').modal('hide')
  $('#quotes-actions').show()
  $('.show-my-quotes').show()
  $('body').addClass('signed-in')
  $('.updatedelete').show()
  $('#all-quotes').hide()
  $('form').trigger('reset')
  // below is for the token
  store.user = data.user
  // localStorage.setItem('userid', data.user.id)
  welcomeText(data)
  $('.user').show()
  $('.add-quote').show()
  goTop()
}

const signInFailure = function () {
  generateMessage('Error on signing in!', 'danger')
  $('#sign-in-modal').modal('hide')
  $('form').trigger('reset')
  goTop()
}

const changePasswordSuccess = function (data) {
  generateMessage('Successfully changed password!', 'success')
  $('#change-password-modal').modal('hide')
  $('form').trigger('reset')
  goTop()
}

const changePasswordFailure = function () {
  generateMessage('Error on changing password!', 'danger')
  $('#change-password-modal').modal('hide')
  $('form').trigger('reset')
  goTop()
}

const signOutSuccess = function (data) {
  $('body').removeClass('signed-in')
  $('#quotes-actions').hide()
  $('.loginbuttons').show()
  $('.user').hide()
  $('.updatedelete').hide()
  $('.add-quote').hide()
  $('#sign-up-button').show()
  byeText()
  goTop()
}

const signOutFailure = function () {
  generateMessage('Error on signing out!', 'danger')
}

const allUsersSuccess = function (data) {
  const showUsersQuotesHtml = userTemplate({users: data.users})
  $('#content').html(showUsersQuotesHtml)
  $('.signed-in .add-quote').show()
}

const allUsersFailure = function (data) {
  generateMessage('Error on retrieving quotes', 'danger')
}

const welcomeText = function (data) {
  const newLede = `Welcome ${data.user.first_name}! Below you will find options to get your quotes and create quotes. You also have access to see what other users have posted for their quotes and if you like their quotes add them to your quotes!`
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

const goTop = function () {
  $('html, body').animate({ scrollTop: 0 }, 'fast')
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
  allUsersFailure,
  welcomeText
}
