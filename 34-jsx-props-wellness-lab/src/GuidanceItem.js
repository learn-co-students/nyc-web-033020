import React from 'react';
import { render } from '@testing-library/react';

const GuidanceItem = (props) => {
    const { title, image, description, stars } = props;

    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{'⭐️'.repeat(stars)}</td>
        </tr>
    )
    
}

export default GuidanceItem;