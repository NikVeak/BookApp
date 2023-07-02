import './App.css';
import Header from './Header.js';
import React, {useEffect, useState} from 'react';
import Footer from './Footer.js';
import Pagination from "./Pagination.js";
import axios from "axios";

const fetchData = async () =>
{
    try
    {
        const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
        const response = await
            axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms"+ "&key=" + apiKey + "&maxResults=40 ");
        console.log(response.data.items);
        return response.data.items;
    }catch (error)
    {
        console.error(error);
    }
};

function App()
{
    const [books, setBooks] = useState([]);
    useEffect(()=>
    {
       const dataApi = async () => {
           const res = await fetchData();
           setBooks(res);
       }
       dataApi();
    });
    return (
    <div className="App">
            <Header/>
        <Pagination pageLimit={10} books={7}/>

            <Footer/>
    </div>
  );
}

export default App;

