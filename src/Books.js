import React from "react";

class Books extends React.Component {
  render() {
    const { onChangeShelf, shelf, title, values } = this.props;

    let result = [];

    result = shelf
      ? values.filter(book => book.shelf === shelf)
      : (result = values);

    return (
      <ol className="books-grid">
        {result &&
          result.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.bookCover})`
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={e => onChangeShelf(e, book)}
                    >
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
      </ol>
    );
  }
}
export default Books;
