import React, { useState, useEffect } from "react";

const BookmarkButton = ({id}) => {
    const [isBookmarked, setIsBookmarked] = useState(localStorage.getItem(id));
    const [data, setData] = useState("");

    useEffect(()=>
    {
        if (isBookmarked)
        {
            localStorage.setItem(data, JSON.stringify(isBookmarked));
        }else
        {
            localStorage.removeItem(data);
        }
    });

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
        setData(id);
    };

    return (
        <button
            style={{
                backgroundColor: isBookmarked ? 'red' : 'green'
            }}
            className="favBook" onClick={handleBookmarkClick}>
            {isBookmarked ? "Удалить из избранного" : "Добавить в избранное"}

        </button>
    );
};

export default BookmarkButton;