import React, { useEffect } from "react";
import defaultImage from "../../Assets/Card.jpg";
import NewSticker from "../../Assets/NewSticker.png";
import "./NewBook.css";
import { useDispatch, useSelector } from "react-redux";
import { getBookFromServer } from "../../Slice/BookSlice";
import { useNavigate } from "react-router-dom";
const NewBook = () => {
  const { bookList } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getBookFromServer());
    },
    { dispatch }
  );
  const startingIndex = bookList.length - 3;

  // Use the filter method to get the last three books
  const lastThreeBooks = bookList.filter(
    (book, index) => index >= startingIndex
  );
  console.log(lastThreeBooks);
  const navigate = useNavigate();
  const readMore = () => {
    navigate("userBookReport");
  };

  return (
    <>
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        style={{ display: "inline-block" }}
        className="m-5"
      >
        New Book Arrivals
        <span className="mx-2 mt-1">
          <img
            src={NewSticker}
            alt="New Image Sticker"
            style={{ width: "35px", height: "35px", backgroundSize: "cover" }}
          />
        </span>
      </h1>

      <div className="container  lg-mx-3 mb-5 book_Container">
        {lastThreeBooks.map((book) => (
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="card mt-3"
            style={{ gap: "20px", border: "none" }}
            key={book._id}
          >
            <div className="Imgbox">
              <img src={book.bookImage ? book.bookImage : defaultImage} />
            </div>
            <div className="content">
              <h3>{book.title}</h3>
              <p>Author Name :{book.author} </p>
              <p>Genre {book.genre}</p>
              <p>Available Status :{book.availableStatus}</p>
              <a onClick={() => readMore()}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default NewBook;
