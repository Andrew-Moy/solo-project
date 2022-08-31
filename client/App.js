import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './App.scss';
import MainContainer from './containers/MainContainer'


 
class App extends Component{
  // const [stocks, addStock] = useState

  render(){
    return(
      <div className = "title">
        <h1>Stock Market Tracker </h1>
        <MainContainer /> 
      </div>
  );
  }
  
}
export default App;