import React from 'react';

const GuidanceItem = props => {

    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td><p>{props.factor.description}</p></td>
            <td><p>{props.factor.stars}</p></td>
            <td><p>{props.factor.isPriority}</p></td>
        </tr>
    )
}

export default GuidanceItem;