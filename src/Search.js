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
           if (books[i].volumeInfo['title'].toLowerCase().includes(enter.toLowerCase()))
           {
               console.log(books[i].volumeInfo['title']);
               res.push(books[i]);
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
        if (event.target.value === "")
        {
            setShowResults(false);
        }
        console.log(event.target.value);
        setEnter(event.target.value);
    }

    const handleBlur = event =>
    {
        setShowResults(false);
    }
    return(
        <div className="divResult">
            <input type="text"
                   value={enter} onChange={handleChange}
                   onBlur={handleBlur}
                   className="inputBook" placeholder="Поиск"/>
            {
                showResults ?
                <div className="resultSearch">
                    {
                        result.map((value, index)=>
                        {
                            return(<ul className="listResult">
                                <li>
                                    <Link className="linkStyle" to="/book" state={{info:value['volumeInfo'], id: value['id']}} >{value['volumeInfo'].title}</Link>
                                    <hr/>
                                    </li>
                            </ul>)
                        })
                    }
            </div> : null}
        </div>
    );
}
export default Search;