import React ,{useEffect, useState} from 'react'
import '../App.css'
import {Link} from "react-router-dom"
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'

const Search=(props)=>{
    const [Search,setSearch]=useState("");
    const [result,setResult]=useState([]);

    useEffect(()=>{
        if(Search){
            BooksAPI.search(Search.trim()).then((res)=>{
                    if(res.length>0)
                        setResult(res);
                    else 
                        setResult([]);
                })
            }
        else
            setResult([]);
    },[Search])

    const handleInputChange=(e)=>{
        setSearch(e.target.value);
    }

    return (
    <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">close</Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={handleInputChange}
                    value={Search}
                />
                </div>
        </div>
        <div className="search-books-results"> 
            <ol className="books-grid">
                {result.map(resultedBook=>{
                        props.books.forEach(book=>{
                           if(resultedBook.id === book.id){
                                resultedBook.shelf=book.shelf;
                           }
                        })
                        return(
                            <li key={resultedBook.id}>
                                <Book book={resultedBook} shelfChange={props.shelfChange}/>
                            </li>
                        )
                    })
                }
                {/* {result &&result.map((book) => {
                    return(
                        <Book
                            key={book.id}
                            book={book}
                            shelfChange={props.shelfChange}
                        />)
                    })} */}
            </ol>
        </div>       
    </div>
    )
}
export default Search