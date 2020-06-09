import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  // console.log(props.sushis)

  const sushiFilter = (arr, start) => {
    // return arr.filter(elem => elem.id > start && elem.id < end)
    return arr.slice(start, start + 4)
  }


  return (
    <Fragment>
      <div className="belt">
        {
          sushiFilter(props.sushis, props.start).map(sushi => 
              <Sushi key={sushi.id} {...sushi} eatenSushis={props.eatenSushis} eatSushi={props.eatSushi}/>)
          /* 
              Render Sushi components here!
          */
        }
        <MoreButton nextFourSushis={props.nextFourSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer