import React from "react";
import {useState, useEffect} from "react";

const Search = ()=>
{
    const [enter, setEnter] = useState("");
    const [result, setResult] = useState([]);

    useEffect(()=>
    {

    }, []);
    const handleChange = event =>
    {
        setEnter(event.target.value);
        console.log(event.target.value);
    }
    return(
        <div className="divResult">
            <input type="text"
                   value={enter} onChange={handleChange} className="inputBook" placeholder="Поиск"/>
        </div>
    );
}
export default Search;