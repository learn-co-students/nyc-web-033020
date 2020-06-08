import React from 'react';

const Details = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.author}</h4>
            <div>{props.blurb}</div>
        </div>
    )
}

export default Details;