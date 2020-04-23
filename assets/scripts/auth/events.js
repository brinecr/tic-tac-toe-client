'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateAccountShow = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#message').hide()
  $('form').trigger('reset')
}

const onChangePasswordButton = function () {
  $('#change-password').show()
  $('#create-game-button').hide()
  $('.textbox').hide()
  $('#sign-out-button').show()
  $('#sign-in').hide()
  $('#message').hide()
  $('#change-password-button').hide()
  $('form').trigger('reset')
}

const onSignedInShow = function () {
  $('#change-password').hide()
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const onCancelGame = function () {
  $('#change-password').hide()
  $('#cancel-game').hide()
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const onSignInShow = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
  $('form').trigger('reset')
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateAccountShow,
  onChangePasswordButton,
  onSignedInShow,
  onCancelGame,
  onSignInShow,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
