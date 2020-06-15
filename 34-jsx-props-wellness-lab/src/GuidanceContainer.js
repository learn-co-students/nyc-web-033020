import React from 'react'
import { wellnessFactors } from './data'
import GuidanceItem from './GuidanceItem'

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
                        {/* TODO: Render GuidanceItems. Check GuidanceItem component for the props. Note: there's a bug in GuidanceItem that will make it fail - find it. */}

                        {/* Spread operator: lets you expand an iterable into its elements; can be used to pass props (key-value pairs) to a component. Here, you're passing down every single key inside of factor obj (from data.js) as a prop down to GuidanceItem */}
                        {wellnessFactors.sort((a,b) => b.stars - a.stars).map(factor => 
                            <GuidanceItem 
                                key={factor.id} 
                                {...factor} />
                        )}

                        {/* Longer way:
                            {wellnessFactors.sort((a,b) => b.stars - a.stars).map(factor => 
                            <GuidanceItem 
                                key={factor.id}
                                id={factor.id}
                                title={factor.title}
                                image={factor.image}
                                description={factor.description}
                                stars={factor.stars}
                            />)
                        } */}
                    </tbody>
                </table>
            </div>
        )   
    }

    render() {
        return (
            <div>
                <h2> Learn More! </h2>
                {this.renderItemInfo()}
            </div>
        )
    }
}