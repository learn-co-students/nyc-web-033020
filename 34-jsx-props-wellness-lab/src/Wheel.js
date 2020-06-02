import React from 'react';
import { wellnessFactors } from './data'; // aliases
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                {wellnessFactors.map(factor=> <WellnessItem id={factor.id} color={factor.color} title={factor.title} />)}
                {/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
            </Pie>
        )
    }
}

// export const getFetch = () => fetch('localhost:3000/songs').then(res => res.json())