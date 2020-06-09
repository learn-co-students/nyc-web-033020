import React from 'react'

// const handleClick = (props) => {
//     props.nextFourSushis()
// }

const MoreButton = (props) => {

  return <button onClick={props.nextFourSushis}>
          More sushi!
        </button>
}

export default MoreButton