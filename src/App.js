import './App.css';
import React from 'react';

import {Routes, Route} from "react-router-dom";
import Home from './Home'
import ItemBook from "./ItemBook";
import Bag from "./Bag";

function App()
{
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/book" element={<ItemBook/>}/>
                <Route path="/bag" element={<Bag/>}/>
            </Routes>
        </div>

    );
}

export default App;

