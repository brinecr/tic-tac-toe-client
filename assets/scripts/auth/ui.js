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
  $('#message').show()
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#sign-up').hide()
  $('#sign-in').show()
  console.log(`signUpSuccess ran. Data is: `, data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed-In successfully!')
  $('#username').text(data.user.email)
  $('#lucky-number').text(Math.floor(Math.random() * 100))
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  store.user = data.user
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#sign-in').hide()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').show()
  $('#message').text('Failure to Sign-In!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  console.log(`Failure. Data is: `, error)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').show()
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success justify-content-center')
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#continue-game-button').show()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed-Out successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success justify-content-center')
  $('#sign-in').show()
  $('#cancel-game').hide()
  $('#create-game-button').hide()
  $('#sign-out-button').hide()
  $('.textbox').hide()
  $('#game').hide()
  $('#change-password').hide()
  $('#continue-game-button').hide()
  $('#change-password-button').hide()
  $('form').trigger('reset')
  store.user = null
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess
}
