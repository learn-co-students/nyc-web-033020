import React from 'react';
import './App.css';
import { Nav, MessageContainer, ChannelsContainer } from './components'
import { fetchChannels } from './requests';

class App extends React.Component {
  state = {
    channels: [],
    selectedChannel: null // the id 
  }

  componentDidMount(){
    fetchChannels()
      .then(channels => {
        this.setState({ channels })
      })
  }

  selectChannel = (id) => {
    this.setState({ selectedChannel: id })
  }

  render() {
    // console.log(this.state)
    let selectedChannelInfo = this.state.channels.find(channel => channel.id === this.state.selectedChannel)

    return (
      <div className="App">
        <Nav />
        <div className="simple-flex-row main">
          <ChannelsContainer 
            selectChannel={this.selectChannel}
            selectedChannel={this.state.selectedChannel} 
            channels={this.state.channels}/>
          <MessageContainer 
            channelInfo={selectedChannelInfo}
            selectedChannel={this.state.selectedChannel} />
        </div>
      </div>
    );
  }
}

export default App;
