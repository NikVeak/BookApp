import React from "react";
import {Routes, Route, useNavigate} from "react-route-dom";

const Books = ({books, loading}) =>
{
    const navigate = useNavigate();

    const navigateToItemBook = () =>
    {
        navigate("")
    }

    if (loading)
    {
        console.log(books);
        return <h2>Loading...</h2>
    }
    return(
        <div>
            <ul className="books-container">
                {
                    books.map(({id, volumeInfo})=>
                    {
                        return(
                            <li key={id} className="book">
                                <div className="headBook">
                                    <h6 className="titleBook">{volumeInfo['title']}</h6>
                                    <p className="subtitleBook">{volumeInfo['subtitle']}</p>
                                </div>
                                <img src={volumeInfo['imageLinks'].thumbnail}/>
                                <div className="infoBook">
                                    <p>Дата публикации: {volumeInfo['publishedDate']}</p>
                                    <p>Автор: {volumeInfo['authors']}</p>

                                    <a className="link_book" onClick={navigateToItemBook}>Узнать больше о книге</a>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Books;