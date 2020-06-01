import React from 'react';


const GuidanceItem = (props) => {
    const {title, image, description,stars} =props
    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{ description}</td>
            <td>{ '⭐️'.repeat(stars)}</td>
        </tr>
    )
}

export default GuidanceItem;