import React from 'react'
import { useEffect } from 'react'
import '../App.css'
import Shelf from '../components/Shelf'
import * as BooksAPI from '../BooksAPI'
import {Link} from "react-router-dom"

const Home =(props)=>{
    useEffect(()=>{
        BooksAPI.getAll().then((res) => props.setBooks(res))
    },[])
    
    const currentlyReading = props.books.filter((book) => book.shelf === "currentlyReading");
    const whatToRead = props.books.filter((book) => book.shelf === "wantToRead");
    const read = props.books.filter((book) => book.shelf === "read");
    
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
                <div>
                    <Shelf
                        title={'Currently Reading'}
                        books={currentlyReading}
                        shelfChange={props.shelfChange}
                    />
                    <Shelf
                        title={'Want To Read'}
                        books={whatToRead}
                        shelfChange={props.shelfChange}
                    />
                    <Shelf
                        title={'Read'}
                        books={read}
                        shelfChange={props.shelfChange}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" className="open-serch__link">Add a book</Link>
            </div>
        </div>
      )
}
export default Home