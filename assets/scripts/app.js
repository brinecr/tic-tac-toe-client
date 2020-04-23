'use strict'

const authEvents = require('./auth/events')
const tictactoeEvents = require('./tictactoe/events')

$(() => {
  // auth events
  $('#create-account-show').on('click', authEvents.onCreateAccountShow)
  $('#change-password-button').on('click', authEvents.onChangePasswordButton)
  $('#signed-in-show').on('click', authEvents.onSignedInShow)

  $('#cancel-game').on('click', authEvents.onCancelGame)
  $('#sign-in-show').on('click', authEvents.onSignInShow)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game events
  $('#a1').on('click', tictactoeEvents.gameHover)
  $('#create-game-button').on('click', tictactoeEvents.onCreateGameShow)

  $('#games-index').on('click', tictactoeEvents.onIndex)
  $('#games-show').on('submit', tictactoeEvents.onShow)
  $('#games-update').on('submit', tictactoeEvents.onUpdate)
  $('#games-create').on('submit', tictactoeEvents.onCreate)
})
