import React from "react";
import {useLocation, useParams} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const ItemBook = () =>{
    const location = useLocation();
    const data = location.state.info;
    const id = location.state.id;
    console.log(data);
    console.log();
    return(
        <div className="wrapperBook">
            <div className="headDiv">
                <h3>{data['title']}</h3>
                <img className="image" alt={`${data['title']}`} src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}/>
                <h4 className="leftDiv">Подзаголовок:</h4>
                <p className="leftDiv" >{data['subtitle']}</p>
                <p className="leftDiv">Дата публикации: {data['publishedDate']}</p>
                <p className="leftDiv" >Количество страниц: {data['pageCount']}</p>
            </div>
            <div className="descriptionDiv">
                <h6>Описание:</h6>
                <p>{data['description']}</p>
            </div>
            <hr/>
            <Footer/>
        </div>
);
}

export default ItemBook;