# Project Title
MyBooks : A tracking book react app

# project description 
The project is responsible for tracking your library,you have three shelves for each shelf contain list of books one shelf for currently read second shelf for want to read last shelf for read books. u can also search for any book with the help of booksapi.

## Installation

- create directory by `mkdir`.
- clone the repository in the directory you just create by $ git clone <repository-link>  
- install all project dependencies with `npm install`
- start the development server with `npm start`
- Open http://localhost:3000 to view it in your browser.
- build the app for production with `npm build`.

## Prerequisites
    
- you just have to installing node.js which comes with npm (node package manager).
- background with react app development.  
  
## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico # React Icon,
│   └── index.html 
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksAPI.js # A JavaScript API which getting the data from it.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components #components of the ui
    |   ├── Book.js
    │   ├── Shelf.js
    ├── pages #pages of the ui
    |   ├── Home.js
    │   ├── Search.js
    ├── index.css # Global styles.
    └── index.js
```
    
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
