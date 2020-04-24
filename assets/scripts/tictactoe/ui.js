'use strict'

const indexGameSuccess = function (data) {
  console.log('indexGameSuccess ran!', data)
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful index!')
  let gameHtml = ''
  data.games.forEach(function (game) {
    const bookSection = (`
      <h3 class="title">Title: ${game.title}</h3>
      <h4>Author: ${game.author}</h4>
      <p>ID: ${game._id}</p>
      <br>
      `)
    gameHtml += gameSection
  })
  $('#game-display').html(gameHtml)
}

const indexGameFailure = function (error) {
  console.log('indexBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed index!')
}

const showGameSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful index!')

  // build HTML to display one book
  const gameHtml = (`
  <h3 class="title">Title: ${data.game.id}</h3>
  <h4>Author: ${data.game.author}</h4>
  <p>ID: ${data.game.id}</p>
  <br>
  `)
  $('#books-display').html(gameHtml)

  $('form').trigger('reset')
}

const showGameFailure = function (error) {
  console.log('showBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to show!')
}

const updateGameSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful update!')
  $('form').trigger('reset')
}

const updateGameFailure = function (error) {
  console.log('updateBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to update!')
  $('form').trigger('reset')
}

const createGameSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful created a book!')
  const bookHtml = (`
  <h3 class="title">Title: ${data.book.title}</h3>
  <h4>Author: ${data.book.author}</h4>
  <p>ID: ${data.book._id}</p>
  <br>
  `)
  $('#books-display').html(bookHtml)

  $('form').trigger('reset')
}

const createGameFailure = function (error) {
  console.log('createBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to add book!')
  $('form').trigger('reset')
}

const winCheck = function() {
  if (a1 === true && a2 === true && a3 === true) {
    $('#messaging').show()
    $('#messaging').text('You win!')
  }
}

module.exports = {
  indexGameSuccess,
  indexGameFailure,
  showGameSuccess,
  showGameFailure,
  updateGameSuccess,
  updateGameFailure,
  createGameSuccess,
  createGameFailure,
  winCheck
}
