'use strict'

// const showGameSuccess = function (data) {
//   $('#messaging').removeClass()
//   $('#messaging').addClass('success')
//   $('#messaging').text('Successful index!')
//   const gameHtml = (`
//   <h3 class="title">Game ID: ${data.game.id}</h3>
//   <h4>Game Pieces: ${data.game.cells}</h4>
//   <p>Player Name: ${data.game.playerX.email}</p>
//   <p>Player ID: ${data.game.playerX.id}</p>
//   <br>
//   `)
//   $('#games-display').html(gameHtml)
//
//   $('form').trigger('reset')
// }
//
// const showGameFailure = function (error) {
//   console.log('showBookFailure ran!', error)
//   $('#messaging').removeClass()
//   $('#messaging').addClass('failure')
//   $('#messaging').text('Failed to show!')
// }

const updateGameSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful update!')
  $('form').trigger('reset')
}

const updateGameFailure = function (error) {
  console.log('updateGameFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to update!')
  $('form').trigger('reset')
}

const createGameSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful created a game!')
  const gameHtml = (`
  <h3 class="title">Title: ${data.game.title}</h3>
  <h4>Author: ${data.book.author}</h4>
  <p>ID: ${data.game.id}</p>
  <br>
  `)
  $('#games-display').html(gameHtml)
}

const createGameFailure = function (error) {
  console.log('createGameFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('alert alert-danger')
  $('#messaging').text('Failed to add game!')
  $('form').trigger('reset')
}

const continueGameShow = function () {
  $('#create-game-button').hide()
  $('#cancel-game').show()
  $('#continue-game-button').hide()
  $('#change-password-button').hide()
  $('#change-password').hide()
  $('#message').show()
  $('.textbox').hide()
  $('#game').show()
  $('#signed-in-show-button').show()
  $('form').trigger('reset')
}

const win = function (playerX, gameOver) {
  $('#message').show()
  $('#whose-turn').hide()
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#game').hide()
  if (playerX === false) {
    $('#message').text('PLAYER X WINS!')
    gameOver = true
  } else if (playerX === true) {
    $('#message').text('PLAYER O WINS!')
    gameOver = true
  }
}

const draw = function (gameOver) {
  $('#message').show()
  $('#message').text('GAME OVER - DRAW')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('#whose-turn').hide()
  $('#game').hide()
  gameOver = true
}

const invalidMove = function () {
  $('#message').show()
  $('#message').text('Invalid move! Please choose a spot not taken already!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
}

module.exports = {
  // showGameSuccess,
  // showGameFailure,
  updateGameSuccess,
  updateGameFailure,
  createGameSuccess,
  createGameFailure,
  continueGameShow,
  win,
  draw,
  invalidMove
}
