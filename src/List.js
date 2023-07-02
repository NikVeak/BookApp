import React, {useState, useEffect} from "react"
import axios from "axios"

const LiComponent = (data) =>
{
    const {item} = data;
   return(
       <li>
          <div>{item}</div>
       </li>
       );
}

const fetchData = async () =>
{
    try
    {
        const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
        const response = await
            axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms"+ "&key=" + apiKey + "&maxResults=40 ");
        console.log(response.data.items);
        return response.data.items;
    }catch (error)
    {
        console.error(error);
    }
};

const List = ()=>
{
    const [result, setResult] = useState([]);

    useEffect(() =>
    {
        const dataGet = async () =>
        {
            const res = await fetchData();
            setResult(res);
        }
        dataGet().then(r => {
            console.log("Success");
        });
    },[]);

    if (result == null)
    {
        return <div>Loading...</div>;
    }
    return(
            result.map((element, index)=>
                <li>
                    <div className="titleBook">
                        {element.title}
                    </div>
                    <div>

                    </div>
                </li>)
        //book.map((element, index)=> <LiComponent value={element}/>)
    );
}
export default List;