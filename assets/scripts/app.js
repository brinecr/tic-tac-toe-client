'use strict'

const authEvents = require('./auth/events')
const tictactoeEvents = require('./tictactoe/events')

$(() => {
  // auth events
  $('#create-account-show').on('click', authEvents.onCreateAccountShow)

  $('#sign-in-show').on('click', authEvents.onSignInShow)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)



  // game events
    $('#a1').hover(authEvents.invert)
    $('#create-game-button').on('click', tictactoeEvents.onCreateGameShow)
})
