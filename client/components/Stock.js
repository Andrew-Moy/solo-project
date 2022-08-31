import React, { useState } from 'react';



function Stock({ticker,name,current,high,low, removeInput}){
    //   const [stockBox, setStockBox] = useState({});
      

      return( 
      <div className = "stockBox" key = {name}>
      <h3>Ticker: {name}</h3>
      {/* <h3>{name}</h3> */}
      <ul>
          <li>Current Price: {current}</li>
          <li>H.O.D: {high}</li>
          <li>L.O.D: {low}</li>
      </ul>
      <button className ="deleteCard" type = "submit" onClick = {() => removeInput(name)} >-</button>
      </div>
  )
}


export default Stock;