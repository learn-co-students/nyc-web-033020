import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';
import data from './data.js';




export default class Wheel extends React.Component {
    render(){
        return (
            <Pie size={300}>
                {/* <WellnessItem title={wellnessFactors[0].title}/> */}
                {wellnessFactors.map(item => <WellnessItem id={item.id} color={item.color} title={item.title}/>)} 
                {/* <WellnessItem title={wellnessFactors[1].title}/> */}
            </Pie>
        )
    }
}


/** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */