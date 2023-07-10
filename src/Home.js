import React, {useEffect, useState} from 'react'
import Books from "./Books";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";

const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
const Home = () =>
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
                    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&key="+apiKey+"&maxResults=40");
                console.log(response.data);
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