import React from 'react';



const Stock = (
    ticker,
    name,
    current,
    hod,
    low,
    
) =>{
    <div className = "stockBox">
        <h3>Ticker{ticker}</h3>
        <h3>{name}</h3>
        <ul>
            <li>Current Price: {current}</li>
            <li>H.O.D: {hod}</li>
            <li>L.O.D: {hod}</li>
        </ul>
    </div>
}

export default Stock;