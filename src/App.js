//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import React, { Component }  from 'react';
import List from "./List.js";

function App()
{
  return (
    <div className="App">
        <div>
            <Header/>
        </div>
        <div className="Basis">
            <List/>
        </div>
    </div>
  );
}

export default App;

