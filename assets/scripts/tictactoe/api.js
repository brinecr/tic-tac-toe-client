'use strict'

const config = require('./../config')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/games'
  })
}

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
    url: config.apiUrl + '/games/' + data.book.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  index,
  show,
  updateGame,
  createGame
}
