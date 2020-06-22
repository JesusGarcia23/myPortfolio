import React from 'react';
import logo from './logo.svg';
import './App.css';
import './travelSpace.scss';
import { Route, Switch } from 'react-router-dom';
import OpeningPage from './Views/OpeningPage';
import ParticlesComponent from './Components/ParticlesComponent';
import TravelSpace from './Components/TravelSpace'
import Projects from './Views/Projects';
import MainPage from './Components/MainPage';

class App extends React.Component {



  render(){
  return (
    <Switch>
    <div className="App"       
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
          <Route exact path="/Test" render={ (props) => (<MainPage {...props} />)}/>
        </div>
    </div>
    </Switch>
  );
}
}

export default App;
