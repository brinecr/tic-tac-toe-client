'use strict'

const store = require('../store')

const failure = function (error) {
  $('#message').text('Failed!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  console.log(`Failure. Data is: `, error)
  $('form').trigger('reset')
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  console.log(`signUpSuccess ran. Data is: `, data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed-In successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  store.user = data.user
  $('#create-game-button').show()
  $('#sign-out-button').show()
  $('#sign-in').hide()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Failure to Sign-In!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  console.log(`Failure. Data is: `, error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  console.log(`changePasswordSuccess ran correctly.`)
  $('form').trigger('reset')
  store.user = null
}

const signOutSuccess = function (data) {
  $('#message').text('Signed-Out successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#sign-in').show()
  $('#create-game-button').hide()
  $('#sign-out-button').hide()
  $('#game').hide()
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess
}
