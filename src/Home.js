import React, {useEffect, useState} from 'react'
import Books from "./Books";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
export default function Home()
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
                    axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms&key="+apiKey+"&maxResult=40");
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