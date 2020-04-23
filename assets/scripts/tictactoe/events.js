'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

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
    .then(ui.updateBookSuccess)
    .catch(ui.updateBookFailure)
}

const onCreate = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameHover = function () {
  event.preventDefault()
  $('#a1').hide()
}

module.exports = {
  onCreateGameShow,
  onIndex,
  onShow,
  onUpdate,
  onCreate,
  onGameHover
}
