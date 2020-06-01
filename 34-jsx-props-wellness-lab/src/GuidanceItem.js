import React from 'react';

const GuidanceItem = (props) => {
    const { title, image, color, description, stars, isPriority} = props


    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{color}</td>
            <td>{'⭐️'.repeat(stars)}</td>
            <td>{isPriority}</td>
        </tr>
    )
}

export default GuidanceItem;