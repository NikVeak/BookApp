import React from 'react';
import Search from "./Search";
import {Link} from "react-router-dom";

const Header = ({books}) =>
{
    return(
        <header className="headerName">
            <h1>Просмотр книг</h1>
            <Link to="/bag">Избранное</Link>
            <Search books={books}/>
        </header>

    );
}

export default Header;