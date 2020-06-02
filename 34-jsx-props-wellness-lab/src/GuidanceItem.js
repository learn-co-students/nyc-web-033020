// import React from 'react';

// const GuidanceItem = () => {
    
//     return (
//         <tr>
//             <td>{props.factor.title}</td>
//             <td><img src={props.factor.image} alt={props.factor.title}/></td>
//             <td>{/** TODO: Add the correct prop here */}</td>
//             <td>{/** TODO: Add the correct prop here */}</td>
//         </tr>
//     )
// }

// export default GuidanceItem;

import React from 'react';

class GuidanceItem extends React.Component {
    render() {
        const { title, image, description, stars, isPriority } = this.props;
        return (
            <tr>
                <td>{title}</td>
                <td><img src={image} alt={title} /></td>
                <td>{description}</td>
                <td>{'⭐️'.repeat(stars)}</td>
                <td>{isPriority}</td>
            </tr>
        )
    }
}

export default GuidanceItem;