import React from "react";

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
                                <h3>{volumeInfo['title']}</h3>
                                <h5>{volumeInfo['subtitle']}</h5>
                                <p></p>
                                <a href={volumeInfo['infoLink']}>Узнать больше о книге</a>
                                <p>Дата публикации: {volumeInfo['publishedDate']}</p>
                                <p>Автор: {volumeInfo['authors']}</p>
                                <div className="descriptionBook">
                                    {volumeInfo['description']}
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}