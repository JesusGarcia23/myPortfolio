import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Views/MainPage';
import ParticlesComponent from './Components/ParticlesComponent';
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
          <Route exact path="/" render={ (props) => (<MainPage {...props} />)}/>
          <Route exact path="/Projects" render={ (props) => (<Projects {...props} />)}/>
        </div>
    </div>
    </Switch>
  );
}
}

export default App;
