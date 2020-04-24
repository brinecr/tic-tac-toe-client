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
  $('#a1').on('click', tictactoeEvents.onGameClicka1)
  $('#a2').on('click', tictactoeEvents.onGameClicka2)
  $('#a3').on('click', tictactoeEvents.onGameClicka3)

  $('#b1').on('click', tictactoeEvents.onGameClickb1)
  $('#b2').on('click', tictactoeEvents.onGameClickb2)
  $('#b3').on('click', tictactoeEvents.onGameClickb3)

  $('#c1').on('click', tictactoeEvents.onGameClickc1)
  $('#c2').on('click', tictactoeEvents.onGameClickc2)
  $('#c3').on('click', tictactoeEvents.onGameClickc3)

  $('#create-game-button').on('click', tictactoeEvents.onCreateGameShow)
  $('#continue-game-button').on('click', tictactoeEvents.onContinueGameShow)

  $('#games-index').on('click', tictactoeEvents.onIndex)
  $('#games-show').on('submit', tictactoeEvents.onShow)
  $('#games-update').on('submit', tictactoeEvents.onUpdate)
  $('#games-create').on('submit', tictactoeEvents.onCreate)
})
