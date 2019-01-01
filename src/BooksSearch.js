import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Books from "./Books";
import {DebounceInput} from 'react-debounce-input';

class BooksSearch extends Component {

  componentDidMount(){
    document.getElementById("idSearchBooks").focus();
  }
  
  render() {
    const { query, filteredBooks, onSearchBooks, onChangeShelf } = this.props;
    
    const message = query === ''
      ? undefined
      : filteredBooks

    return (
      <div className="list-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <DebounceInput id="idSearchBooks"
                type="text"
                debounceTimeout={200}
                placeholder="Search by terms"
                value={query}
                onChange={event => onSearchBooks(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="bookshelf">
          <div className="bookshelf-books">
                  <Books 
                    values = {filteredBooks}
                    onChangeShelf={onChangeShelf}
                  />
           </div>
        </div>

        {message && message.length === 0 && (
          <div className="warning-message">no matches found</div>
        )}
      </div>
    );
  }

  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
    filteredBooks: PropTypes.array.isRequired
  };
}

export default BooksSearch;
