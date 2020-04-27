'use strict'

const config = require('./../config')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    data
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/games/' + id
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  show,
  updateGame,
  createGame
}
