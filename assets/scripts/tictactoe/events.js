'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
let gameHtml
let whoseTurnHtml
let turn = false
let a1 = false
let a2 = false
let a3 = false
let b1 = false
let b2 = false
let b3 = false
let c1 = false
let c2 = false
let c3 = false

const onIndex = function () {
  console.log(event)
  api.index()
    .then(ui.indexGameSuccess)
    .catch(ui.indexGameFailure)
}

const onCreateGameShow = function () {
  $('#create-game-button').hide()
  $('#cancel-game').show()
  $('#change-password-button').hide()
  $('#message').hide()
  $('#change-password').hide()
  $('.textbox').hide()
  $('#game').show()
  $('#continue-game-button').hide()
  $('#signed-in-show-button').show()
  $('form').trigger('reset')
  turn = false
  $('#whose-turn').html(`Player 1's Turn`)
  a1 = false
  $('#a1').html(' ').css('background-color', 'white')
  a2 = false
  $('#a2').html(' ').css('background-color', 'white')
  a3 = false
  $('#a3').html(' ').css('background-color', 'white')
  b1 = false
  $('#b1').html(' ').css('background-color', 'white')
  b2 = false
  $('#b2').html(' ').css('background-color', 'white')
  b3 = false
  $('#b3').html(' ').css('background-color', 'white')
  c1 = false
  $('#c1').html(' ').css('background-color', 'white')
  c2 = false
  $('#c2').html(' ').css('background-color', 'white')
  c3 = false
  $('#c3').html(' ').css('background-color', 'white')
}

const onContinueGameShow = function () {
  $('#create-game-button').hide()
  $('#cancel-game').show()
  $('#continue-game-button').hide()
  $('#change-password-button').hide()
  $('#message').hide()
  $('#change-password').hide()
  $('.textbox').hide()
  $('#game').show()
  $('#signed-in-show-button').show()
  $('form').trigger('reset')
}

const onShow = function () {
  event.preventDefault()
  console.log(event)
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.show(formData.game.id)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onUpdate = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateBook(formData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onCreate = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameClicka1 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && a1 === false) {
    turn = !turn
    a1 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a1').html(gameHtml)
    $('#a1').css('background-color', 'transparent')
  } else if (turn === false && a1 === false) {
    turn = !turn
    a1 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a1').html(gameHtml)
    $('#a1').css('background-color', 'transparent')
  } else if ((turn === false && a1 === true) || (turn === true && a1 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
  ui.winCheck()
}

const onGameClicka2 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && a2 === false) {
    turn = !turn
    a2 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    console.log('a1 is true')
    $('#whose-turn').html(whoseTurnHtml)
    $('#a2').html(gameHtml)
    $('#a2').css('background-color', 'transparent')
  } else if (turn === false && a2 === false) {
    turn = !turn
    a2 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a2').html(gameHtml)
    $('#a2').css('background-color', 'transparent')
  } else if ((turn === false && a2 === true) || (turn === true && a2 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClicka3 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && a3 === false) {
    turn = !turn
    a3 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    console.log('a3 is true')
    $('#whose-turn').html(whoseTurnHtml)
    $('#a3').html(gameHtml)
    $('#a3').css('background-color', 'transparent')
  } else if (turn === false && a3 === false) {
    turn = !turn
    a3 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a3').html(gameHtml)
    $('#a3').css('background-color', 'transparent')
  } else if ((turn === false && a3 === true) || (turn === true && a3 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClickb1 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && b1 === false) {
    turn = !turn
    b1 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    console.log('b1 is true')
    $('#whose-turn').html(whoseTurnHtml)
    $('#b1').html(gameHtml)
    $('#b1').css('background-color', 'transparent')
  } else if (turn === false && b1 === false) {
    turn = !turn
    b1 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b1').html(gameHtml)
    $('#b1').css('background-color', 'transparent')
  } else if ((turn === false && b1 === true) || (turn === true && b1 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClickb2 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && b2 === false) {
    turn = !turn
    b2 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    console.log('b2 is true')
    $('#whose-turn').html(whoseTurnHtml)
    $('#b2').html(gameHtml)
    $('#b2').css('background-color', 'transparent')
  } else if (turn === false && b2 === false) {
    turn = !turn
    b2 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b2').html(gameHtml)
    $('#b2').css('background-color', 'transparent')
  } else if ((turn === false && b2 === true) || (turn === true && b2 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClickb3 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && b3 === false) {
    turn = !turn
    b3 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b3').html(gameHtml)
    $('#b3').css('background-color', 'transparent')
  } else if (turn === false && b3 === false) {
    turn = !turn
    b3 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b3').html(gameHtml)
    $('#b3').css('background-color', 'transparent')
  } else if ((turn === false && b3 === true) || (turn === true && b3 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClickc1 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && c1 === false) {
    turn = !turn
    c1 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c1').html(gameHtml)
    $('#c1').css('background-color', 'transparent')
  } else if (turn === false && c1 === false) {
    turn = !turn
    c1 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c1').html(gameHtml)
    $('#c1').css('background-color', 'transparent')
  } else if ((turn === false && c1 === true) || (turn === true && c1 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClickc2 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && c2 === false) {
    turn = !turn
    c2 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c2').html(gameHtml)
    $('#c2').css('background-color', 'transparent')
  } else if (turn === false && c2 === false) {
    turn = !turn
    c2 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c2').html(gameHtml)
    $('#c2').css('background-color', 'transparent')
  } else if ((turn === false && c2 === true) || (turn === true && c2 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

const onGameClickc3 = function () {
  event.preventDefault()
  $('#message').hide()
  if (turn === true && c3 === false) {
    turn = !turn
    c3 = true
    gameHtml = (`O`)
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c3').html(gameHtml)
    $('#c3').css('background-color', 'transparent')
  } else if (turn === false && c3 === false) {
    turn = !turn
    c3 = true
    gameHtml = (`X`)
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c3').html(gameHtml)
    $('#c3').css('background-color', 'transparent')
  } else if ((turn === false && c3 === true) || (turn === true && c3 === true)) {
    $('#message').show()
    $('#message').text('Invalid move! Please choose a spot not taken already!')
    $('#message').removeClass()
    $('#message').addClass('alert alert-danger')
  }
}

module.exports = {
  onCreateGameShow,
  onContinueGameShow,
  onIndex,
  onShow,
  onUpdate,
  onCreate,
  onGameClicka1,
  onGameClicka2,
  onGameClicka3,
  onGameClickb1,
  onGameClickb2,
  onGameClickb3,
  onGameClickc1,
  onGameClickc2,
  onGameClickc3
}
