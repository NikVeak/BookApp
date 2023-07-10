import React from "react";
import {Link} from "react-router-dom";
import BookMark from "./components/BookMark";


const Books = ({books, loading}) =>
{

    if (loading)
    {
        console.log(books);
        return <h2>Loading...</h2>
    }
    return(
    <div className="wrapper">
            <ul className="books-container">
                {
                    books.map(({id, volumeInfo})=>
                    {
                        return(
                            <li id={id} key={id} className="book">
                                <img alt={`${volumeInfo['title']}`} src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}/>
                                <div className="headBook">
                                    <h6 className="titleBook">{volumeInfo['title']}</h6>
                                </div>
                                <div className="infoBook">
                                    <p className="author">Автор: {volumeInfo['authors']}</p>
                                    <Link className="bookLink" to="/book"
                                        state={{info:volumeInfo, id: id}}
                                    >Подробнее</Link>
                                </div>
                                <br/>
                                <BookMark id={id}/>
                            </li>
                        );
                    })
                }

            </ul>
    </div>

    );
}

export default Books;