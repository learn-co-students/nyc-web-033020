import React from 'react'
import { wellnessFactors } from './data' //named import
import WellnessItem from './WellnessItem' //default import
import { Pie } from './styles'

export default class Wheel extends React.Component {
    render() {
        return (
            <Pie size={300}>
                {/* TODO: map over your wellnessFactors and create a WellnessItem for each. Check the WellnessItem component to see what props it's expecting */}

                {wellnessFactors.map(factor => <WellnessItem key={factor.id} {...factor} />)}
                
                {/* Longer way:
                {wellnessFactors.map(factor => <WellnessItem key={factor.id} id={factor.id} color={factor.color} title={factor.title} isPriority={factor.isPriority} />)} */}
            </Pie>
        )
    }
}