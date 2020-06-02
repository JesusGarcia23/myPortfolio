import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './Views/Skills'

class App extends React.Component {

  onWheelAction = (event) => {
    console.log(event)
  }

  render(){
  return (
    <div className="App" onWheel={this.onWheelAction}>
    <Skills/>
    
    </div>
  );
}
}

export default App;
