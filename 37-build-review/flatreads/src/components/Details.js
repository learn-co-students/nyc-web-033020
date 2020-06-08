import React from 'react';

const Details = props => {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.blurb}</div>
        </div>
    )
}

export default Details;