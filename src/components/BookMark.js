import React, { useState } from "react";

const BookmarkButton = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>
    {

    });

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <button onClick={handleBookmarkClick}>
            {isBookmarked ? "Удалить избранное" : "Добавить в избранное"}
        </button>
    );
};

export default BookmarkButton;