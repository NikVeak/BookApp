import React, {useEffect} from "react";

const Bag = () =>
{
    const printInfo = () =>
    {
        const data = localStorage.getItem("data");
        const initialData = JSON.parse(data);
        console.log(initialData.volumeInfo['title']);
        return initialData.volumeInfo['title'];
    }

    return(
        <div>
            {
                printInfo()
            }
        </div>
    );
}

export default Bag;