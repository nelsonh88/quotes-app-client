'use strict'

const store = require('../store')
const userTemplate = require('../templates/users-quotes.handlebars')
// above is for the token as well

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully!')
  $('#message').css('background-color', 'green')
  $('#sign-up-modal').modal('hide')
  console.log(data)
}

const signUpFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing up!')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully!')
  $('#message').css('background-color', 'green')
  $('#sign-in-modal').modal('hide')
  $('#quotes-actions').show()
  $('body').addClass('signed-in')

  console.log(data)
  // below is for the token
  store.user = data.user
  welcomeText(data)
  $('.user').show()
}

const signInFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing in!')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Change password Successfully!')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Error on changing password!')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully!')
  $('#message').css('background-color', 'green')
  console.log('signed out big dawg')
  $('body').removeClass('signed-in')
  $('#quotes-actions').hide()
}

const signOutFailure = function (error) {
  console.log(error)
  $('#message').text('Error on signing out!')
  $('#message').css('background-color', 'red')
}

const allUsersSuccess = function (data) {
  console.log('data is ', data)
  const showUsersQuotesHtml = userTemplate({users: data.users})
  $('#message').text('quotes')
  $('#message').css('background-color', 'green')
  $('#content').html(showUsersQuotesHtml)
}

const welcomeText = function (data) {
  const newLede = `Welcome ${data.user.first_name}! Below you will find options to get your quotes and create quotes`
  $('.lede').text(newLede)
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
