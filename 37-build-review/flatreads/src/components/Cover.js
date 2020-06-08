import React from 'react';

const Cover = props => {
    return (
        <div>
            <img src={props.url} alt={`${props.title} cover-image`} />
        </div>
    )
}

export default Cover;