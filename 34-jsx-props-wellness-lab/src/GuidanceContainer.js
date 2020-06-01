import React from 'react';
import { wellnessFactors } from './data';
import GuidanceItem from './GuidanceItem';

export default class GuidanceContainer extends React.Component {

    renderItemInfo = () => {
        return (
            <div>
                <h3>Wellness Factors Described</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Image</td>
                            <td>Description</td>
                            <td>Stars</td>
                            <td>Priority?</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
						wellnessFactors.sort((a,b) => {
							return b.stars - a.stars
						}).map(factor => {
							return <GuidanceItem 
								title={factor.title}
								image={factor.image}
								description={factor.description}
								stars={factor.stars}
								isPriority={factor.isPriority ? "YES" : "NO"}
							/>
						})
                    } 
                    </tbody>
                </table>
            </div>
        )   
    }

    render(){
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}
