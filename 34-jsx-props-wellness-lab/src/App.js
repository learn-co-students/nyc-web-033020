import React, {Component, Fragment} from 'react'
import './App.css'
import Wheel from './Wheel'
import GuidanceContainer from './GuidanceContainer'

function App() {

  const renderComponentsWithLine = () => {
    return (
      <Fragment>
        <Wheel />
        <hr />
        <GuidanceContainer />
      </Fragment>
    )
  }
  return (
    <div className="App">
      <h1>Welcome to the Wellness Center</h1>
      { renderComponentsWithLine() }
    </div>
  )
}

export default App