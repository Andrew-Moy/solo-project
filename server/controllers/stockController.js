const fetch = require('node-fetch');
// const { require } = require('../server');
const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("symbol", "AAPL");


const stockController = {};



// console.log(localISOTime);

stockController.getStockData = (req, res, next) =>{
    const symbol = req.params.id;
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
    // console.log(localISOTime)
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=CCIQLR2HA5UI7VG3`)
    .then((response) => response.json())
    .then((data) =>{
        // console.log(data);
        // if(data['Error Message']){
        //     return next({
        //         log:'stockController',
        //         message: { err: 'stockController.getStockData: ERROR Incorrect data received'}
        //     })
        // }
        // console.log('data:', data);
        res.locals.data = data['Time Series (Daily)']['2022-08-30'];
        // console.log('res.locals.data:', res.locals.data);
        return next();
    })
    .catch(err =>{
        return next({
            log:'stockController',
            message: { err: 'stockController.getStockData: ERROR Incorrect data received'}
        })
    })
}

module.exports = stockController;