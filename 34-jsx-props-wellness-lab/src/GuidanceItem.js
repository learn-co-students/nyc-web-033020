import React from 'react';


const GuidanceItem = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td><img src={props.image} alt={props.title}/></td>
            <td>{ props.description}</td>
            <td>{ '⭐️'.repeat(props.stars)}</td>
        </tr>
    )
}

export default GuidanceItem;