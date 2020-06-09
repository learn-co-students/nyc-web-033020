import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    start: 5,
    eatenSushis: [], // array of ids 
    tableMoney: 100,
    newMoney: ''
  }

  componentDidMount() {
    this.fetchSushis()
  }

  fetchSushis = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ sushis: data })
      })
  }

  nextFourSushis = () => {
    // functional setState version
    // this.setState( prevState => ({ start: prevState.start + 4 }) )

    // BONUS: START AT BEGINNING
    let newIndex = this.state.start + 4
    if(this.state.sushis.length <= newIndex ){
      newIndex = 0 
    }

    // this.setState(prevState => { return { start: prevState.start + 4 } } )
    this.setState({ start: newIndex })
  }

  eatSushi = (id) => {
    // finding the sushi to find its price, you could pass price in when eatSushi is invoked instead
    const eatenSushi = this.state.sushis.find(sushi => sushi.id === id);
    const { price } = eatenSushi;


    if(!this.state.eatenSushis.includes(id) && this.state.tableMoney >= price ){ //(this.state.tableMoney - price) >= 0
      this.setState(prevState => ({ 
        eatenSushis: [...prevState.eatenSushis, id],
        tableMoney: prevState.tableMoney - price
      }))
    } else {
      alert('you already ate that one')
    }
  }

  handleMoneyInput = e => {
    this.setState({ newMoney: e.target.value })
  }

  handleMoneySubmit = e => {
    e.preventDefault()
    // add the number from newMoney to tableMoney in state
    // clear the form ==> setState newMoney back to empty string
    this.setState({ 
      tableMoney: this.state.tableMoney + parseInt(this.state.newMoney),
      newMoney: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <form onSubmit={this.handleMoneySubmit}>
          <input value={this.state.newMoney} onChange={this.handleMoneyInput} placeholder="add money here"/>
          <button type="submit">Submit</button>
        </form>
        <SushiContainer 
          sushis={this.state.sushis} 
          eatenSushis={this.state.eatenSushis} 
          start={this.state.start}
          nextFourSushis={this.nextFourSushis}
          eatSushi={this.eatSushi}/>
        <Table eatenSushis={this.state.eatenSushis} money={this.state.tableMoney} />
      </div>
    );
  }
}

export default App;

/**
 * 1. something in state to represent each field
 * 2. connect the state via value 
 * 3. connect input back to state via onChange
 * 4. handleSubmit 
 * 
 */