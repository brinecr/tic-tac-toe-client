'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

let gameHtml
let whoseTurnHtml
let playerX = true
let a1 = false
let a2 = false
let a3 = false
let b1 = false
let b2 = false
let b3 = false
let c1 = false
let c2 = false
let c3 = false
let count = 0
let gameOver = false
let sessionGamesPlayed = 0
let currentGame = ['', '', '', '', '', '', '', '', '']

// const onIndex = function () {
//   console.log(event)
//   api.index()
//     .then(ui.indexGameSuccess)
//     .catch(ui.indexGameFailure)
// }

const onHoverIna1 = function () {
  if (a1 === false) {
    $('#a1').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverIna2 = function () {
  if (a2 === false) {
    $('#a2').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverIna3 = function () {
  if (a3 === false) {
    $('#a3').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverInb1 = function () {
  if (b1 === false) {
    $('#b1').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverInb2 = function () {
  if (b2 === false) {
    $('#b2').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverInb3 = function () {
  if (b3 === false) {
    $('#b3').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverInc1 = function () {
  if (c1 === false) {
    $('#c1').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverInc2 = function () {
  if (c2 === false) {
    $('#c2').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverInc3 = function () {
  if (c3 === false) {
    $('#c3').css('background-color', 'rgba(0, 0, 0, .75)')
  }
}

const onHoverOuta1 = function () {
  if (a1 === false) {
    $('#a1').css('background-color', 'white')
  }
}

const onHoverOuta2 = function () {
  if (a2 === false) {
    $('#a2').css('background-color', 'white')
  }
}

const onHoverOuta3 = function () {
  if (a3 === false) {
    $('#a3').css('background-color', 'white')
  }
}

const onHoverOutb1 = function () {
  if (b1 === false) {
    $('#b1').css('background-color', 'white')
  }
}

const onHoverOutb2 = function () {
  if (b2 === false) {
    $('#b2').css('background-color', 'white')
  }
}

const onHoverOutb3 = function () {
  if (b3 === false) {
    $('#b3').css('background-color', 'white')
  }
}

const onHoverOutc1 = function () {
  if (c1 === false) {
    $('#c1').css('background-color', 'white')
  }
}

const onHoverOutc2 = function () {
  if (c2 === false) {
    $('#c2').css('background-color', 'white')
  }
}

const onHoverOutc3 = function () {
  if (c3 === false) {
    $('#c3').css('background-color', 'white')
  }
}

const onCreateGameShow = function () {
  sessionGamesPlayed = sessionGamesPlayed + 1
  $('#create-game-button').hide()
  $('#whose-turn').show()
  $('#games-played').text(sessionGamesPlayed)
  $('#cancel-game').show()
  $('#message').text('')
  $('#message').removeClass()
  $('#change-password-button').hide()
  $('#message').hide()
  $('#change-password').hide()
  $('.textbox').hide()
  $('#game').show()
  $('#continue-game-button').hide()
  $('#signed-in-show-button').show()
  $('form').trigger('reset')
  playerX = true
  count = 0
  currentGame = ['', '', '', '', '', '', '', '', '']
  gameOver = false
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
  // $('a1').bind('click', onGameClicka1())
  // $('a2').bind('click', onGameClicka2())
}

const onContinueGameShow = function () {
  ui.continueGameShow()
}

const onShow = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.show(formData.game.id)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onUpdateGame = function (data) {
  event.preventDefault()
  api.updateGame()
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

const winCheck = function () {
// values match across the top row
  if (currentGame[0] !== '' && currentGame[1] !== '' && currentGame[2] !== '' && currentGame[0] === currentGame[1] && currentGame[0] === currentGame[2]) {
    ui.win(playerX, gameOver)

    // values match across the middle row
  } else if (currentGame[3] !== '' && currentGame[4] !== '' && currentGame[5] !== '' && currentGame[3] === currentGame[4] && currentGame[3] === currentGame[5]) {
    ui.win(playerX)

    // values match across the bottom row
  } else if (currentGame[6] !== '' && currentGame[7] !== '' && currentGame[8] !== '' && currentGame[6] === currentGame[7] && currentGame[6] === currentGame[8]) {
    ui.win(playerX)

    // values match across column 1
  } else if (currentGame[0] !== '' && currentGame[3] !== '' && currentGame[6] !== '' && currentGame[0] === currentGame[3] && currentGame[0] === currentGame[6]) {
    ui.win(playerX)

    // values match across column 2
  } else if (currentGame[1] !== '' && currentGame[4] !== '' && currentGame[7] !== '' && currentGame[1] === currentGame[4] && currentGame[1] === currentGame[7]) {
    ui.win(playerX)

    // values match across column 3
  } else if (currentGame[2] !== '' && currentGame[5] !== '' && currentGame[8] !== '' && currentGame[2] === currentGame[5] && currentGame[2] === currentGame[8]) {
    ui.win(playerX)

    // values match diagonal a1 to c3
  } else if (currentGame[0] !== '' && currentGame[4] !== '' && currentGame[8] !== '' && currentGame[0] === currentGame[4] && currentGame[0] === currentGame[8]) {
    ui.win(playerX)

    // values match diagonal a3 to c1
  } else if (currentGame[6] !== '' && currentGame[4] !== '' && currentGame[2] !== '' && currentGame[6] === currentGame[4] && currentGame[6] === currentGame[2]) {
    ui.win(playerX)
  } else if (count > 8) {
    ui.draw()
  }
}

const onGameClicka1 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && a1 === false) {
    count = count + 1
    playerX = !playerX
    a1 = true
    gameHtml = (`O`)
    currentGame[0] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a1').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX  === true && a1 === false) {
    count = count + 1
    playerX = !playerX
    a1 = true
    gameHtml = (`X`)
    currentGame[0] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a1').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && a1 === false) || (playerX === false && a1 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClicka2 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && a2 === false) {
    count = count + 1
    playerX = !playerX
    a2 = true
    gameHtml = (`O`)
    currentGame[1] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a2').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && a2 === false) {
    count = count + 1
    playerX = !playerX
    a2 = true
    gameHtml = (`X`)
    currentGame[1] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a2').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && a2 === false) || (playerX === false && a2 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClicka3 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && a3 === false) {
    count = count + 1
    playerX = !playerX
    a3 = true
    gameHtml = (`O`)
    currentGame[2] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a3').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && a3 === false) {
    count = count + 1
    playerX = !playerX
    a3 = true
    gameHtml = (`X`)
    currentGame[2] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#a3').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && a3 === false) || (playerX === false && a3 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClickb1 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && b1 === false) {
    count = count + 1
    playerX = !playerX
    b1 = true
    gameHtml = (`O`)
    currentGame[3] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b1').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && b1 === false) {
    count = count + 1
    playerX = !playerX
    b1 = true
    gameHtml = (`X`)
    currentGame[3] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b1').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && b1 === false) || (playerX === false && b1 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClickb2 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && b2 === false) {
    count = count + 1
    playerX = !playerX
    b2 = true
    gameHtml = (`O`)
    currentGame[4] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b2').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && b2 === false) {
    count = count + 1
    playerX = !playerX
    b2 = true
    gameHtml = (`X`)
    currentGame[4] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b2').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && b2 === false) || (playerX === false && b2 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClickb3 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && b3 === false) {
    count = count + 1
    playerX = !playerX
    b3 = true
    gameHtml = (`O`)
    currentGame[5] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b3').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && b3 === false) {
    count = count + 1
    playerX = !playerX
    b3 = true
    gameHtml = (`X`)
    currentGame[5] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#b3').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && b3 === false) || (playerX === false && b3 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClickc1 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && c1 === false) {
    playerX = !playerX
    c1 = true
    gameHtml = (`O`)
    currentGame[6] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c1').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && c1 === false) {
    count = count + 1
    playerX = !playerX
    c1 = true
    gameHtml = (`X`)
    currentGame[6] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c1').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && c1 === false) || (playerX === false && c1 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClickc2 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && c2 === false) {
    count = count + 1
    playerX = !playerX
    c2 = true
    gameHtml = (`O`)
    currentGame[7] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c2').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && c2 === false) {
    count = count + 1
    playerX = !playerX
    c2 = true
    gameHtml = (`X`)
    currentGame[7] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c2').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && c2 === false) || (playerX === false && c2 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

const onGameClickc3 = function () {
  event.preventDefault()
  $('#message').hide()
  if (playerX === false && c3 === false) {
    count = count + 1
    playerX = !playerX
    c3 = true
    gameHtml = (`O`)
    currentGame[8] = gameHtml
    whoseTurnHtml = (`Player 1's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c3').html(gameHtml).css('background-color', 'transparent')
  } else if (playerX === true && c3 === false) {
    count = count + 1
    playerX = !playerX
    c3 = true
    gameHtml = (`X`)
    currentGame[8] = gameHtml
    whoseTurnHtml = (`Player 2's Turn`)
    $('#whose-turn').html(whoseTurnHtml)
    $('#c3').html(gameHtml).css('background-color', 'transparent')
  } else if ((playerX === true && c3 === false) || (playerX === false && c3 === false)) {
    ui.invalidMove()
  }
  winCheck()
}

module.exports = {
  onHoverIna1,
  onHoverIna2,
  onHoverIna3,
  onHoverInb1,
  onHoverInb2,
  onHoverInb3,
  onHoverInc1,
  onHoverInc2,
  onHoverInc3,
  onHoverOuta1,
  onHoverOuta2,
  onHoverOuta3,
  onHoverOutb1,
  onHoverOutb2,
  onHoverOutb3,
  onHoverOutc1,
  onHoverOutc2,
  onHoverOutc3,
  onCreateGameShow,
  onContinueGameShow,
  // onIndex,
  onShow,
  onUpdateGame,
  onCreate,
  onGameClicka1,
  onGameClicka2,
  onGameClicka3,
  onGameClickb1,
  onGameClickb2,
  onGameClickb3,
  onGameClickc1,
  onGameClickc2,
  onGameClickc3,
  winCheck
}
