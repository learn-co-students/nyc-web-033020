import React from 'react';

const GuidanceItem = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td><img src={props.image} alt={props.title}/></td>
            <td>description={props.description}{/** TODO: Add the correct prop here */}</td>
            <td> stars={'⭐️'.repeat(props.stars)}{/** TODO: Add the correct prop here */}</td>
        </tr>
    )
}

export default GuidanceItem;