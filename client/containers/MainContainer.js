import React, { useState } from 'react';
// import Stock from '../components/Stock.js'
import StockContainer from './StockContainer'
import axios from 'axios';


const MainContainer = (props) =>{
    const [stockBox, setStockBox] = useState({});
    const [input, setInput] = useState("");
    const [info, setInfo] = useState({})

    const addInput = (e) =>{
        setInput((e.target.value).toUpperCase());
    }

    const removeInput = (e) =>{
        console.log('stockbox: ', stockBox)
        let sub = {...stockBox}
        delete sub[e];
        
        setStockBox(stockBox =>({
          ...sub
        }))
        console.log('test');
    }

    const addStock = () => {
        // console.log(e);
        let symbol = input;
        fetch(`http://localhost:8080/stock/${symbol}`)
        .then((response) => response.json())
        .then((data) =>{console.log('DATA: ', data)
        let current = data['1. open'];
        let high = data['2. high'];
        let low = data['3. low'];
        const obj = {
            'current': current,
            'high': high,
            'low': low
        }
        let updatedValue = {[input]: obj};
        console.log(stockBox);
        setStockBox(stockBox =>({
            ...stockBox,
            ...updatedValue
        }))
        setInput('');
        })
        .catch(err =>{console.log(err)})

        // let updatedValue = {[input]: input};
        // setStockBox(stockBox =>({
        //     ...stockBox,
        //     ...updatedValue
        // }))
        // setInput('');

    }
    return( 
    <div className="topLevel">
    <div className = "mainContainer">
        <h2 id = "portfolioName">Andrew's Portfolio</h2>
        <div className="input">
            <input
            id = "new-stock"
            onChange = {addInput}
            placeholder = "Enter Stock Ticker"
            value = {input}
            
            />
            <button id="add-stock" className = "primary" type ="submit" onClick = {addStock}  >Add Stock</button>
            </div>
        </div>
    <StockContainer stockBox= {stockBox}
    removeInput = {removeInput}
    />
    </div>    
    )
}

export default MainContainer;