import React from 'react';
import Book from './Book';

const BookList = props => {
    return (
        <div className="book-list">
            {props.books.map(book => <Book key={book.id} {...book} /> )}
        </div>
    )
}

export default BookList;