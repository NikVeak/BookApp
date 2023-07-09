import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Books = ({books, loading}) =>
{
    const [data, setData] = useState("");

    useEffect(()=>
    {
        for (let i = 0; i < books.length;i++)
        {
            if (books[i].id === data)
            {
                setData(books[i]);
                console.log(books[i]);
            }
        }
       localStorage.setItem("data", JSON.stringify(data));
    }, [data]);
    const handleAddBag = (event) =>
    {
        setData(event.target.id);
        console.log(event.target.id);
    }

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
                                    <Link className="pageLink" to="/book"
                                        state={{info:volumeInfo, id: id}}
                                    >Подробнее</Link>
                                </div>
                                <br/>
                                <button id={id} className="addBag" onClick={handleAddBag}>В избранное</button>
                            </li>
                        );
                    })
                }

            </ul>
    </div>

    );
}

export default Books;