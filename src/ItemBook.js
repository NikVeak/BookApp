import React from "react";
import {useLocation, useParams} from "react-router-dom";

const ItemBook = () =>{
    const location = useLocation();
    const data = location.state.info;
    const id = location.state.id;
    console.log(data);
    console.log();
    return(
        <div>
            <h3>{data['title']}</h3>
            <img alt={`${data['title']}`} src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}/>
            <h4>Подзаголовок:</h4>
            <p>{data['subtitle']}</p>
            <p>Дата публикации: {data['publishedDate']}</p>
            <p>Количество страниц: {data['pageCount']}</p>
            <h6>Описание:</h6>
            <p>{data['description']}</p>
        </div>
    );
}

export default ItemBook;