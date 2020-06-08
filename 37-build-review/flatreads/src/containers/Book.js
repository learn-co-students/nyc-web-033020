import React from 'react';
import Cover from '../components/Cover'
import Details from '../components/Details'

const Book = props => {
    let { cover_url, author, title, blurb } = props;

    return (
        <div>
            Book
            <Cover url={cover_url} title={title}/>
            <Details title={title} author={author} blurb={blurb} />
        </div>
    )
}

export default Book;