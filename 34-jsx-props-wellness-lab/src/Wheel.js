import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


export default class Wheel extends React.Component {

    renderWellnessItems = (factors) => {
        return factors.map(factor => <WellnessItem key={factor.id} {...factor}/>)
    }

    render(){
        return (
            <Pie size={300}>
                {this.renderWellnessItems(wellnessFactors)}
               
            </Pie>
        )
    }
} 