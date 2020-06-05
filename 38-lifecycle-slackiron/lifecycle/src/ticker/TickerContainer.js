import React from 'react'
import Ticker from './Ticker'

// 1. when the app loads, start rendering a random number 1-100 every second
// 2. when the user clicks the stop button, stop the timer... and if they click again, restart
// 3. if the new number is higher, show it in green and if it is lower show it in red


// componentDidMount

// componentDidUpdate

// componentWillUnmount

// noneOfTheAbove

class TickerContainer extends React.Component {

  state = {
    number: 0,
    myInterval: null,
    color: 'white'
  }

  handleIntervalCreation = () => {
    let myInterval = setInterval(() => {
      this.setState({ number: Math.ceil(Math.random() * 100) })
    },2000)
    this.setState({ myInterval })
  }

  componentDidMount(){
    // every second, reset the number in state
    this.handleIntervalCreation()
    // console.log('my interval', myInteval)
  }

  componentDidUpdate(prevProps, prevState){
    // i can do the comparsions locally here 
    // BE - AWARE ---> setting state here is dangerous 
    console.log('PREVIOUS: ', prevState, '    CURRENT: ', this.state)
    if(this.state.number > prevState.number){
      this.setState({ color: 'green' })
    } else if(this.state.number < prevState.number){
      this.setState({ color: 'red' })
    }
    // exit case : when they're equal we don't set state 
  }

  componentWillUnmount(){
    clearInterval(this.state.myInterval)
  }

  toggleTicker = () => {
    // clear the interval if it exists
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else { // no interval currently exists, so create a new one 
      this.handleIntervalCreation()
    }
  }

  render(){
    return (
      <div className="box" style={{backgroundColor: this.state.color}}>
        <button onClick={this.toggleTicker}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 