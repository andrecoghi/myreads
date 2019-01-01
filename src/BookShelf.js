import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Books from "./Books";

const shelves = [
  {
    title: "Currently Reading",
    shelf: "currentlyReading"
  },
  {
    title: "Want To Read",
    shelf: "wantToRead"
  },
  {
    title: "Read",
    shelf: "read"
  }
];

const BookShelf = ({ onClearBooksSearch, books, onChangeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {shelves.map(item => (
            <div key={item.shelf} className="bookshelf">
              <h2 className="bookshelf-title">{item.title}</h2>
              <div className="bookshelf-books">
                <Books
                  values={books}
                  shelf={item.shelf}
                  onChangeShelf={onChangeShelf}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/search" className="open-search">
        <button onClick={event => onClearBooksSearch("")}>Add a book</button>
      </Link>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  onClearBooksSearch: PropTypes.func.isRequired
};

export default BookShelf;
