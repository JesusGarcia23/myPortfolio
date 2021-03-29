import React from 'react';
import './App.css';
import './travelSpace.scss';
import { Route, Switch } from 'react-router-dom';
import OpeningPage from './Views/OpeningPage';
import ParticlesComponent from './Components/ParticlesComponent';
import MainPage from './Views/MainPage';
import ProjectDetails from './Components/ProjectDetails';

class App extends React.Component {



  render(){
  return (
    <Switch>
    <React.Fragment>
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
          <Route exact path="/Project/:projectName" render={ (props) => (<ProjectDetails {...props} />)}/>
          <Route exact path="/Test" render={ (props) => (<MainPage {...props} />)}/>
        </div>
    </div>
    </React.Fragment>
    </Switch>
  );
}
}

export default App;
