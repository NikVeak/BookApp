import React, {useRef} from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";

const Search = ()=>
{
    const ref = useRef(null);
    const [enter, setEnter] = useState("");
    const [result, setResult] = useState([]);
    const [showResults, setShowResults] = useState(false)

    useEffect(()=>
    {
        const keyEnterHandler = (event) =>
        {
            if (event.key === 'Enter')
            {
                event.preventDefault();
                console.log(result);
            }
        }



        document.addEventListener('keydown', keyEnterHandler);
        return () =>
        {
            document.removeEventListener('keydown', keyEnterHandler);
        }
    }, []);

    useEffect(()=>
    {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?q=${enter}&key=${apiKey}&maxResults=40`
                );
                setResult(response.data.items);
                 setShowResults(true);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBooks();

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