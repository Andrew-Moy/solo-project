import React from 'react';
import Stock from '../components/Stock';
import stockController from '../../server/controllers/stockController';
import axios from 'axios';

function StockContainer ({stockBox, removeInput}){

    return(
    <div className = "innerbox">
        {Object.keys(stockBox).map((x) => {
            // stockController.getStockData(x);
            
            return <Stock 
            name = {x}
            removeInput = {removeInput}
            // current = {res.locals.data['1. open']}
            // hod = {res.locals.data['2. high']}
            // low = {res.locals.data['3. low']}
            />
        })}
    </div>
    )
}

export default StockContainer;