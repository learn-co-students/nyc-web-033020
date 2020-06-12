import React from 'react';
import './App.css';
import { Auth, Help, Home, Nav, PetIndex, PetProfile } from './components';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav /> {/** nav stays outside of our switch and routes b/c we want it visible all of the time  */}
        <Switch> {/** with switch, order from most to least specific and will only render ONE */}
          <Route path="/login" render={(routerProps) => <Auth {...routerProps}/>} />
          <Route path="/help" render={() => <Help exampleCustomProp={false} />} /> 
          {/** use render prop to route if you need custom props in your component */}
          <Route path="/pets/:id" component={PetProfile} />
          <Route path="/pets" component={PetIndex} />
          <Route exact path="/" component={Home} /> {/** will match if the user is a / or /anythingElse */}
        </Switch>

        {/* <Auth /> */}
        {/* <Help />
        <Home />
        <PetProfile />
        <PetIndex /> */}
      </div>
    );
  }
}

export default App;
