// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [
  { isbn: '111', title: 'Book One', author: 'Author A', reviews: {} },
  { isbn: '222', title: 'Book Two', author: 'Author B', reviews: {} },
  { isbn: '333', title: 'Another Book', author: 'Author A', reviews: {} },
];

let users = [];

// Task 1: Get all books
app.get('/books', (req, res) => res.json(books));

// Task 2: Get book by ISBN
app.get('/books/isbn/:isbn', (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  book ? res.json(book) : res.status(404).send('Book not found');
});

// Task 3: Get books by Author
app.get('/books/author/:author', (req, res) => {
  const result = books.filter(b => b.author === req.params.author);
  res.json(result);
});

// Task 4: Get books by Title
app.get('/books/title/:title', (req, res) => {
  const result = books.filter(b =>
    b.title.toLowerCase().includes(req.params.title.toLowerCase())
  );
  res.json(result);
});

// Task 5: Get book reviews
app.get('/books/review/:isbn', (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  book ? res.json(book.reviews || {}) : res.status(404).send('Book not found');
});

// Task 6: Register new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username))
    return res.status(409).send('User exists');
  users.push({ username, password });
  res.send('User registered successfully');
});

// Task 7: Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  user ? res.send('Login successful') : res.status(401).send('Invalid credentials');
});

// Task 8: Add/Modify review
app.put('/books/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).send('Book not found');
  book.reviews = book.reviews || {};
  book.reviews[username] = review;
  res.send('Review updated');
});

// Task 9: Delete review
app.delete('/books/review/:isbn', (req, res) => {
  const { username } = req.body;
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book || !book.reviews || !book.reviews[username])
    return res.status(404).send('Review not found');
  delete book.reviews[username];
  res.send('Review deleted');
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
