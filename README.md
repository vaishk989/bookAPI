# 📚 Book API Project

A simple Node.js REST API for managing books and user reviews.

## 🚀 Features

- View all books, search by ISBN, title, or author
- User registration and login
- Add, modify, and delete reviews
- Client-side calls using Axios

## 🛠️ Setup Instructions

1. Clone this repository:
   ```bash
   git clone <your-repo-link>
   cd book-api-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Use Postman or run:
   ```bash
   node client.js
   ```

## 📌 API Endpoints

| Method | Endpoint                    | Description                    |
|--------|-----------------------------|--------------------------------|
| GET    | `/books`                    | Get all books                  |
| GET    | `/books/isbn/:isbn`         | Get book by ISBN               |
| GET    | `/books/author/:author`     | Get books by author            |
| GET    | `/books/title/:title`       | Get books by title             |
| GET    | `/books/review/:isbn`       | Get reviews                    |
| POST   | `/register`                 | Register new user              |
| POST   | `/login`                    | Login                          |
| PUT    | `/books/review/:isbn`       | Add/Modify book review         |
| DELETE | `/books/review/:isbn`       | Delete user's book review      |

## 🧪 Client Test Methods

```js
getAllBooks();                     // Task 10
getBookByISBN('111');             // Task 11
getBooksByAuthor('Author A');     // Task 12
getBooksByTitle('Book');          // Task 13
```

## 📁 Submission

1. Upload the folder to GitHub.
2. Share the repository link.

https://github.com/<your-username>/book-api-project
