import React from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksSearch from "./BooksSearch";
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
  state = {
    query: "",
    books: [],
    filteredBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      let booksAux = books.map(book => {
        this.dealWithThumbnailAndAuthor(book);
        return book;
      });
      this.setState(() => ({
        books: booksAux
      }));
    });
  }

  handleChangeBookShelf = (e, bookToUpdateShelf) => {
    const shelf = e.target.value;
    bookToUpdateShelf.shelf = shelf;

    this.setState(state => {
      BooksAPI.update(bookToUpdateShelf, shelf).then(response => {
        bookToUpdateShelf.shelf = shelf;
        const updateBooks = state.books.filter(
          b => b.id !== bookToUpdateShelf.id
        );
        updateBooks.push(bookToUpdateShelf);

        this.setState({
          books: updateBooks
        });
      });
    });
  };

  handleSearchBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then(foundBooks => {
          this.updateSearchedResult(foundBooks);
        })
        .catch(error => {
          this.setState({
            filteredBooks: []
          });
        });
    } else {
      this.setState({ filteredBooks: [] });
    }
    this.setState({
      query: query
    });
  };
  
  handleClearBooksSearch = query => {
    this.setState({
      query: query,
      filteredBooks: []
    });
  };

  updateSearchedResult = foundBooks => {
    let search = foundBooks.map(found => {
      let existingBook = this.state.books.find(
        inLibrary => inLibrary.id === found.id
      );
      if (existingBook) {
        found.shelf = existingBook.shelf;
      } else {
        found.shelf = "none";
      }

      this.dealWithThumbnailAndAuthor(found);

      return found;
    });

    if (!foundBooks || foundBooks.hasOwnProperty("error")) {
      this.setState({ filteredBooks: [] });
    } else {
      this.setState({ filteredBooks: search });
    }

    this.setState({ filteredBooks: search });
  };

  dealWithThumbnailAndAuthor(book) {
    let bookCover, authors;
    if (typeof book.imageLinks === "undefined") {
      bookCover = "";
    } else {
      bookCover = book.imageLinks.thumbnail;
    }
    book.bookCover = bookCover;
    if (typeof book.authors === "undefined") {
      authors = "No authors";
    } else {
      authors = book.authors;
    }
    book.authors = authors;
  }


  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            e
            render={() => (
              <BookShelf
                onClearBooksSearch={query => this.handleClearBooksSearch(query)}
                books={this.state.books}
                onChangeShelf={this.handleChangeBookShelf}
              />
            )}
          />
          <Route
            path="/search"
            render={({ history }) => (
              <BooksSearch
                query={this.state.query}
                onSearchBooks={query => this.handleSearchBooks(query)}
                filteredBooks={this.state.filteredBooks}
                onChangeShelf={(event, bookToUpdateShelf) => {
                  this.handleChangeBookShelf(event, bookToUpdateShelf);
                  history.push("/");
                }}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
