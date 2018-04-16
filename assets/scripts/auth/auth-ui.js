'use strict'
const pageMessage = $('#message')
const signUpModal = $('#sign-up-modal')
const signInModal = $('#sign-in-modal')

const store = require('../store')
const userTemplate = require('../templates/users-quotes.handlebars')
// above is for the token as well

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('#message').delay(3000).slideToggle()
  $('#sign-up-modal').modal('hide')
  console.log(data)
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing up!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('#message').delay(3000).slideToggle()
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
  $('#message').text('Error on signing in!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('#message').delay(3000).slideToggle()
  $('#sign-in-modal').modal('hide')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('#message').delay(3000).slideToggle()
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on changing password!')
  $('#message').removeClass('alert-success').addClass('alert-danger').show()
  $('#message').delay(3000).slideToggle()
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').removeClass('alert-danger').addClass('alert-success').show()
  $('#message').delay(3000).slideToggle()
  console.log('signed out big dawg')
  $('body').removeClass('signed-in')
  $('#quotes-actions').hide()
  localStorage.removeItem('userid')
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
