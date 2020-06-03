import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Views/MainPage';

class App extends React.Component {

  onWheelAction = (event) => {
    console.log(event)
  }

  render(){
  return (
    <div className="App" onWheel={this.onWheelAction}>
    <Switch>
    <Route exact path="/" render={ (props) => (<MainPage {...props} />)}/>
    </Switch>
    </div>
  );
}
}

export default App;
