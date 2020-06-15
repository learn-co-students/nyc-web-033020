import React from 'react'
import { HoldCSSDeck, PieCSSDeck } from './styles'

export default class WellnessItem extends React.Component {

    //When you click on the slice, alert with the name:
    handleClick = (event) => {
        console.log(event)
        alert(`You clicked on ${this.props.title}!`)
    }

    render() {
        const { id, color, title, isPriority } = this.props
        // console.log(this.props)

        return (
            <HoldCSSDeck rotate={(id - 1) * 45}>
                <PieCSSDeck rotate={45} color={isPriority ? "gold" : color}>
                    <div className="title" onClick={this.handleClick}>{title}</div>
                </PieCSSDeck>
            </HoldCSSDeck>
        )
    }
}

/* TODO: Add defaultProps to the WellnessItem for color. The default color should be some grey. Test: do not pass down a prop for the color and see the whole circle go grey! */
WellnessItem.defaultProps = {
    color: 'grey'
}