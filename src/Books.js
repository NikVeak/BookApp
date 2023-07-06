import React from "react";

import {Link} from "react-router-dom";


const Books = ({books, loading}) =>
{

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
                                </div>
                                <img alt={`${volumeInfo['title']}`} src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}/>
                                <div className="infoBook">
                                    <p>Автор: {volumeInfo['authors']}</p>
                                    <Link to="/book"
                                        state={{info:volumeInfo, id: id}}
                                    >Подробнее</Link>
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