import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Search = ({books})=>
{
    const [enter, setEnter] = useState("");
    const [result, setResult] = useState([]);
    const [showResults, setShowResults] = useState(false)
    useEffect(()=>
    {
        let res = [];
        for (let i = 0; i < books.length; i++)
        {
            if (books[i].volumeInfo['authors'] === undefined)
            {
                if (books[i].volumeInfo['title'].toLowerCase().includes(enter.toLowerCase()))
                {
                    console.log(books[i].volumeInfo['title']);
                    res.push(books[i]);
                }
            }else
            {
                if (books[i].volumeInfo['title'].toLowerCase().includes(enter.toLowerCase())
                || books[i].volumeInfo['authors'][0].toLowerCase().includes(enter.toLowerCase()))
                {
                    console.log(books[i].volumeInfo['title']);
                    res.push(books[i]);
                }
            }
        }
        if (res.length > 0)
        {
            setShowResults(true);
        }
        console.log(res);
        setResult(res);
    }, [enter]);
    const handleChange = event =>
    {
        console.log(event.target.value);
        setEnter(event.target.value);
    }

    const handleBlur = event =>
    {
        // скрываем результат так, чтобы пользователь успел нажать на ссылку
        setTimeout(()=>
        {
            setShowResults(false);
        }, 1000);
    }
    return(
        <div className="divResult">
            <input id="enterText" type="text"
                   value={enter} onChange={handleChange}
                   onBlur={handleBlur}
                   className="inputBook" placeholder="Поиск"/>
            { // если состояние показыать результат, то показываем
                showResults ?
                <div className="resultSearch">
                    {
                        <ul className="listResult">
                            {
                                result.map((value, index)=>
                                {
                                    return(
                                            <li key = {value['id']}>
                                                <div className="blockResult">
                                                <img id="imgLink" alt={value['volumeInfo'].title} style={{width: '70px', height: '100px'}} className="image"  src={`http://books.google.com/books/content?id=${value['id']}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}/>
                                                <Link onClick={handleBlur} className="pageLink" to="/book" state={{info:value['volumeInfo'], id: value['id']}}>
                                                        {value['volumeInfo'].title}
                                                    </Link>
                                                </div>
                                            </li>
                                    );
                                })
                            }
                        </ul>
                    // иначе null
                        }
            </div> : null}
        </div>
    );
}
export default Search;