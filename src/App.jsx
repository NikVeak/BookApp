import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Home.jsx'
import ItemBook from "./ItemBook.jsx";

function App()
{
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/book" element={<ItemBook/>}/>
            </Routes>
        </div>

    );
}

export default App;

