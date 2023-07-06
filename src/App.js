import './App.css';
import React from 'react';

import {Routes, Route} from "react-router-dom";
import Home from './Home'
import ItemBook from "./ItemBook";
import Search from "./Search";

function App()
{

    return (
        <div className="App">
            <header className="headerName">
                <h1>Поиск книг</h1>
                <Search books={books}/>
            </header>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/book" element={<ItemBook/>}/>
            </Routes>
        </div>

    );
}

export default App;

