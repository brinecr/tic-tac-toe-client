'use strict'

const authEvents = require('./auth/events')
const tictactoeEvents = require('./tictactoe/events')

$(() => {
  // auth events
  $('create-account-show').on('submit', authEvents.onCreateAccountShow)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game events
})
