import './App.css';
import Header from './Header.js';
import React, {useEffect, useState} from 'react';
import Footer from './Footer.js';
import Pagination from "./Pagination.js";
import axios from "axios";


const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
function App()
{
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
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
    const lastBookIndex = currentPage*booksPerPage;
    // первый индек книги
    const firstBookIndex= lastBookIndex-booksPerPage;

    const currentBook = books.slice(firstBookIndex, lastBookIndex);


    return (
    <div className="App">
            <Header/>
        <Pagination books={books} loading={loading}/>

            <Footer/>
    </div>
  );
}

export default App;

