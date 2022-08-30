import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.scss';
import MainContainer from './containers/MainContainer'


 
class App extends Component{



  render(){
    return(
      <div>
        <h1>Stock Market Tracker </h1>
        <MainContainer /> 
      </div>
  );
  }
  
}
export default App;