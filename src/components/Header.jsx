import React from 'react';
import Search from "./Search.jsx";


const Header = () =>
{
    return(
        <header className="headerName">
            <h1>Просмотр книг</h1>
            <Search/>
        </header>

    );
}

export default Header;