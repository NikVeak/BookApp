//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import React from 'react';
import List from "./List.js";
import Footer from './Footer.js';

function App()
{
  return (
    <div className="App">
            <Header/>
        <div className="Basis">
            <List/>
        </div>

            <Footer/>
    </div>
  );
}

export default App;

