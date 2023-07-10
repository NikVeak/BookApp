import React from 'react';
import Search from "./Search";
import {Link} from "react-router-dom";
import logoBag from "../images/star.png"

const Header = ({books}) =>
{
    return(
        <header className="headerName">
            <h1>Просмотр книг</h1>
            <Search books={books}/>
        </header>

    );
}

export default Header;