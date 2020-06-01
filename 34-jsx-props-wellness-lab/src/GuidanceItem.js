import React from 'react';

const GuidanceItem = () => {
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>{props.factor.description}</td>
            <td>{props.factor.stars}</td>
        </tr>
    )
}

export default GuidanceItem;