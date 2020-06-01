import React from 'react';
import './App.css';
import { Nav, MessageContainer, ChannelsContainer } from './components'
import { fetchChannels } from './requests';

class App extends React.Component {
  state = {
    channels: []
  }

  selectChannel = () => {
    // TODO: What does this method need to do in order to represent the selected channel?
  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <div className="simple-flex-row main">
          <ChannelsContainer 
            selectChannel={this.selectChannel}
            selectedChannel={null /** TODO:HOW SHOULD THIS BE REPRESENTED? */} 
            channels={this.state.channels}/>
          <MessageContainer 
            selectedChannel={null /** TODO:HOW SHOULD THIS BE CALCULATED? */} />
        </div>
      </div>
    );
  }
}

export default App;
