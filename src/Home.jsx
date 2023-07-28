import React, { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import BookMark from "./components/BookMark.jsx";

// апи для гугл букс
const apiKey = "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88";
const Home = () => {
  let category = [
    "business",
    "comics",
    "philosophy",
    "history",
    "economics",
    "science",
    "humor",
    "sports",
    "manga",
  ];
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      console.log(startIndex);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${category[startIndex]}&key=${apiKey}&startIndex=${startIndex}`
        )
        .then((response) => {
          if (response.status === 429) {
            return <h1>Oops, many requests !</h1>;
          }
          console.log(response.data);
          setStartIndex((prevState) => prevState + 1);
          setBooks([...books, ...response.data.items]);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [loading]);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setTimeout(() => {
        setLoading(true);
      }, 1200);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <ul className="books-container">
          {books.map(({ id, volumeInfo }) => {
            return (
              <li id={id} key={id} className="book">
                <img
                  className="imgCard"
                  alt={`${volumeInfo["title"]}`}
                  src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div className="headBook">
                  <h6 className="titleBook">{volumeInfo["title"]}</h6>
                </div>
                <div className="infoBook">
                  <p className="author">Автор: {volumeInfo["authors"]}</p>
                  <Link
                    className="bookLink"
                    to="/book"
                    state={{ info: volumeInfo, id: id }}
                  >
                    Подробнее
                  </Link>
                </div>
                <br />
                <BookMark id={id} />
              </li>
            );
          })}
        </ul>
        {loading ? <p>Loading...</p> : <p></p>}
      </div>
      <hr />
      <Footer />
    </div>
  );
};
export default Home;
