import React, {useEffect, useState} from 'react'
import Books from "./Books";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

// апи для гугл букс
const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
const Home = () =>
{
    // состояние текущего списка книг
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    // устанавливаем состояние текущей страницы для пагинации
    const [currentPage, setCurrentPage] = useState(1);
    const [bookPerPage] = useState(3);

    useEffect(()=>
    {
        const getData = async () =>
        {
            // запрашиваем книги
            try
            {
                setLoading(true);
                // выполняем запрос к google books
                const response = await
                    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&key="+apiKey+"&maxResults=40");
                setBooks(response.data.items);
                setLoading(false)
            }catch (error)
            {
                console.error(error);
                return(
                    <h1 id="error" style={{color:'red'}}>Error response !</h1>
                );
            }
        };
        getData();
    }, []);

    // последний индекс книги
    const lastBookIndex = currentPage*bookPerPage;
    // первый индекc книги
    const firstBookIndex= lastBookIndex-bookPerPage;

    const currentBook = books.slice(firstBookIndex, lastBookIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div>
            <Header books={books}/>
            <Books books={currentBook} loading={loading}/>
            <Pagination bookPerPage={bookPerPage}
                        totalBooks={books.length}
                        paginate={paginate}
            />
            <Footer/>
        </div>

    )
}
export default Home;