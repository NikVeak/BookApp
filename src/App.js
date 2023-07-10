import './App.css';
import React from 'react';

import {Routes, Route} from "react-router-dom";
import Home from './Home'
import ItemBook from "./ItemBook";

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

