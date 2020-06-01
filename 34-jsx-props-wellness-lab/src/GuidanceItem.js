import React from 'react';

const GuidanceItem = () => {
    return (
        <tr>
            <td>{props.factor.title}</td>
            <td><img src={props.factor.image} alt={props.factor.title}/></td>
            <td>{/** TODO: Add the correct prop here */}</td>
            <td>{/** TODO: Add the correct prop here */}</td>
        </tr>
    )
}

export default GuidanceItem;