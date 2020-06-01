import React from 'react';
import { HoldCSSDeck, PieCSSDeck } from './styles';


export default class WellnessItem extends React.Component {
    render(){
        const { id, color, title, isPriority } = this.props
        return (
            <HoldCSSDeck rotate={(id - 1) * 45}>
                <PieCSSDeck rotate={45} color={isPriority ? "#FFD700" : color || "#BEBEBE"}>
                    <div className="title">{title}</div>
                </PieCSSDeck>
            </HoldCSSDeck>
        )
    }
}

/**
 *  TODO: Add default props to the WellnessItem for color 
 *          the default color should be some kind of grey so it stands out
 *          TEST: do not pass down a prop for the color and see the whole circle go grey! 
 */
