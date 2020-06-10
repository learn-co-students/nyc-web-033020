import React from "react"

const Pizza = props => {
  let { id, topping, size, vegetarian, choosePizza } = props;
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Vegetarian' : 'Not Vegetarian'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => choosePizza(id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza


/**
 * const choosePizza = id => {  doSomeStuff }
 * 
 * onClick={() => choosePizza(id)}
 * 
 * 
 * 
 * 
 * 
 * const choosePizza = (e, id) => {  doSomeStuff }
 * 
 * onClick={event => choosePizza(event, id)}
 * 
 * 
 * 
 * 
 * 
 * const choosePizza = event => {  doSomeStuff }
 * 
 * onClick={choosePizza}
 * onClick={event => choosePizza(event)}
 */
