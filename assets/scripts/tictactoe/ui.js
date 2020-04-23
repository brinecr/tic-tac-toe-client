'use strict'

const indexBookSuccess = function (data) {
  console.log('indexBookSuccess ran!', data)
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful index!')

  // create a variable to hold all the books:
  let bookHtml = ''

  // loo[ through the data and create HTML for each book:
  data.books.forEach(function (book) {
    const bookSection = (`
      <h3 class="title">Title: ${book.title}</h3>
      <h4>Author: ${book.author}</h4>
      <p>ID: ${book._id}</p>
      <br>
      `)

    bookHtml += bookSection
  })

  // After looping, put all HTML on page:
  $('#books-display').html(bookHtml)
}

const indexBookFailure = function (error) {
  console.log('indexBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed index!')
}

const showBookSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful index!')

  // build HTML to display one book
  const bookHtml = (`
  <h3 class="title">Title: ${data.book.title}</h3>
  <h4>Author: ${data.book.author}</h4>
  <p>ID: ${data.book._id}</p>
  <br>
  `)
  $('#books-display').html(bookHtml)

  $('form').trigger('reset')
}

const showBookFailure = function (error) {
  console.log('showBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to show!')
}

const updateBookSuccess = function (data) {
  $('#messaging').removeClass()
  $('#messaging').addClass('success')
  $('#messaging').text('Successful update!')
  $('form').trigger('reset')
}

const updateBookFailure = function (error) {
  console.log('updateBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to update!')
  $('form').trigger('reset')
}

const createBookSuccess = function (data) {
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

const createBookFailure = function (error) {
  console.log('createBookFailure ran!', error)
  $('#messaging').removeClass()
  $('#messaging').addClass('failure')
  $('#messaging').text('Failed to add book!')
  $('form').trigger('reset')
}

module.exports = {
  indexBookSuccess,
  indexBookFailure,
  showBookSuccess,
  showBookFailure,
  updateBookFailure,
  updateBookSuccess,
  createBookSuccess,
  createBookFailure
}
