import React from 'react';

class GuidanceItem extends React.Component {
	render () {
		const {title, image, description, stars, isPriority} = this.props;
    	return (
        	<tr>
            	<td>{title}</td>
            	<td><img src={image} alt={title}/></td>
            	<td>{description}</td>
            	<td>{'⭐️'.repeat(stars)}</td>
            	<td>{isPriority}</td>
        	</tr>
    	)
    }
}

export default GuidanceItem;