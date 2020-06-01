import React from 'react';

const GuidanceItem = (props) => {
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>description={props.factor.description}{/** TODO: Add the correct prop here */}</td>
            <td> stars={'⭐️'.repeat(props.factor.stars)}{/** TODO: Add the correct prop here */}</td>
        </tr>
    )
}

export default GuidanceItem;