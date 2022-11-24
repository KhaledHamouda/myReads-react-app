import "./App.css";
import {Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useState } from 'react'
import * as BooksAPI from './BooksAPI'

const App =()=>{
  const [books, setBooks] = useState([]);
  
  const shelfChange = (book, shelf) => {
    const newBooks = books.map(b => {
      if(b.id === book.id){
        book.shelf=shelf
      }
      return b
    })
    setBooks(newBooks);
    BooksAPI.update(book,shelf);
};

  return(
    <div className="app">
      {/* routes */}
      <Routes>
        <Route exact path ="/" element={<Home books={books} setBooks={setBooks} shelfChange ={shelfChange}/>} />
        <Route path="/search" element ={<Search books={books} shelfChange={shelfChange}/>}/>
      </Routes>
    </div>
  )
}
export default App
