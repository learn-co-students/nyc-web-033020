import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
            onClick={() => props.eatSushi(props.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          // id and eatenSushi array I can check if id is in eatenSushi ==> it has been eaten or not 
          props.eatenSushis.includes(props.id) ? 
            null
          :
            <img src={props.img_url} width="100%" alt={props.name}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi