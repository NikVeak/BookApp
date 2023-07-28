import React, { useState, useEffect } from "react";

const BookmarkButton = ({ id }) => {
  const [isBookmarked, setIsBookmarked] = useState(localStorage.getItem(id));
  const [data, setData] = useState("");

  useEffect(() => {
    if (isBookmarked) {
      localStorage.setItem(data, JSON.stringify(isBookmarked));
    } else {
      localStorage.removeItem(data);
    }
  });

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    setData(id);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isBookmarked ? "red" : "green",
        }}
        className="favBook"
        onClick={handleBookmarkClick}
      >
        <button
          style={{
            backgroundColor: isBookmarked ? "orangered" : "greenyellow",
          }}
          className="icon"
        >
          &#10084;
        </button>
        {isBookmarked ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
};

export default BookmarkButton;
