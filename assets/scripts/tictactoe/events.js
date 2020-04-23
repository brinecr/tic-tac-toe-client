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

module.exports = {
  onIndex,
  onShow,
  onUpdate,
  onCreate
}
