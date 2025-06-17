const axios = require('axios');

// Task 10: Get all books using async/await
async function getAllBooks() {
  try {
    const res = await axios.get('http://localhost:3000/books');
    console.log('All Books:', res.data);
  } catch (err) {
    console.error(err.message);
  }
}

// Task 11: Search by ISBN using Promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:3000/books/isbn/${isbn}`)
    .then(res => console.log('Book by ISBN:', res.data))
    .catch(err => console.error(err.message));
}

// Task 12: Search by Author using async/await
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:3000/books/author/${author}`);
    console.log('Books by Author:', res.data);
  } catch (err) {
    console.error(err.message);
  }
}

// Task 13: Search by Title using async/await
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/books/title/${title}`);
    console.log('Books by Title:', res.data);
  } catch (err) {
    console.error(err.message);
  }
}

// Example calls (Uncomment to test)
//getAllBooks();
//getBookByISBN('111');
//getBooksByAuthor('Author A');
getBooksByTitle('Book');
