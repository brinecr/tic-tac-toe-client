'use strict'

const store = require('../store')

const failure = function (error) {
  $('#message').text('Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`Failure. Data is: `, error)
  $('form').trigger('reset')
}

const createAccountShow = function (data) {
  $('#message').text('Create Account Screen shown successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').show()
  $('#sign-in').hide()
  $('form').trigger('reset')
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signUpSuccess ran. Data is: `, data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed-In successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`signInSuccess ran. User is: `, data.user)
  store.user = data.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(`changePasswordSuccess ran correctly.`)
  $('form').trigger('reset')
  store.user = null
}

const signOutSuccess = function (data) {
  $('#message').text('Signed-Out successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('form').trigger('reset')
}

module.exports = {
  createAccountShow,
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
