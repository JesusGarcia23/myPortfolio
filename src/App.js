import React from 'react';
import logo from './logo.svg';
import './App.css';
import './travelSpace.scss';
import { Route, Switch } from 'react-router-dom';
import OpeningPage from './Views/OpeningPage';
import ParticlesComponent from './Components/ParticlesComponent';
import TravelSpace from './Components/TravelSpace'
import Projects from './Views/Projects';

class App extends React.Component {

  onWheelAction = (event) => {
    console.log(event)
  }

  render(){
  return (
    <Switch>
    <div className="App" onWheel={this.onWheelAction}         
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}>
    <ParticlesComponent/>
    <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Route exact path="/" render={ (props) => (<OpeningPage {...props} />)}/>
          <Route exact path="/Projects" render={ (props) => (<Projects {...props} />)}/>
          <Route exact path='/test' render={(props) => (<TravelSpace {...props}/>)}/>
        </div>
    </div>
    </Switch>
  );
}
}

export default App;
