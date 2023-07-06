import React from "react";
import {useState, useEffect} from "react";

const Search = ({books})=>
{
    const [enter, setEnter] = useState("");
    const [result, setResult] = useState([]);

    useEffect(()=>
    {
        let resultSearch = [];
        let item_res = "";
        if (books.length !== 0)
        {
            for (let i = 0; i < books.length; i++)
            {
                console.log(books[i].volumeInfo['title']);
                item_res = books[i].volumeInfo['title'].toLowerCase().includes(enter.toLowerCase());
                console.log(item_res)
                if (item_res)
                {
                    resultSearch.push(books[i]);
                }
            }
        }


        setResult(resultSearch);
        console.log(resultSearch);
    }, [enter]);
    const handleChange = event =>
    {
        setEnter(event.target.value);
        console.log(event.target.value);
    }
    return(

        <div className="divResult">
            <input type="text"
                   value={enter} onChange={handleChange} className="inputBook" placeholder="Поиск"/>
            {
                <ul>
                    {
                        result.map(({id, volumeInfo})=>
                        {
                           return(
                               <li><a>{volumeInfo['title']}</a></li>
                           )
                        })
                    }
                </ul>

            }
        </div>
    );
}
export default Search;