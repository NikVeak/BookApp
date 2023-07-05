import './App.css';
import Header from './Header.js';
import React, {useEffect, useState} from 'react';
import Footer from './Footer.js';
import Books from './Books.js';
import axios from "axios";
import Pagination from "./Pagination";


const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
function App()
{

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookPerPage] = useState(3);
    useEffect(()=>
    {
        const getData = async () =>
        {
            try
            {
                setLoading(true);
                // выполняем запрос к google books
                const response = await
                    axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");
                console.log(response.data.items);
                setBooks(response.data.items);
                setLoading(false)
            }catch (error)
            {
                console.error(error);
            }
        };
        getData();
    }, []);

    // последний индекс книги
    const lastBookIndex = currentPage*bookPerPage;
    // первый индек книги
    const firstBookIndex= lastBookIndex-bookPerPage;

    const currentBook = books.slice(firstBookIndex, lastBookIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
    <div className="App">
        <Header/>
        <Books books={currentBook} loading={loading}/>
        <Pagination bookPerPage={bookPerPage}
        totalBooks={books.length}
        paginate={paginate}
        />
        <Footer/>
    </div>
  );
}

export default App;

