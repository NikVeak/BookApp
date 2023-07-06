import React from 'react';
import Search from "./Search";

const Header = () =>
{
    return(
        <header className="headerName">
            <h1>Поиск книг</h1>
            <Search/>
        </header>

    );
}

export default Header;