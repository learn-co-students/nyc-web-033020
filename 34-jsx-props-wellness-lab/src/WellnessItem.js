import React from 'react';
import { HoldCSSDeck, PieCSSDeck } from './styles';



export default class WellnessItem extends React.Component {
    render(){
        const { id, color, title, isPriority } = this.props
        return (
            <HoldCSSDeck rotate={(id - 1) * 45}>
                <PieCSSDeck rotate={45} color={isPriority ? 'gold' : color}>
                    <div className="title">{title}</div>
                </PieCSSDeck>
            </HoldCSSDeck>
        )
    }
}


WellnessItem.defaultProps = {
    color: 'grey'
}

