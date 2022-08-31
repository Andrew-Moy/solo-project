// import stockController from './controllers/stockController';
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const CONNECTION_URL = 'mongodb+srv://ajm3598:tiger3598@cluster0.8hvc6t6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;
const defaultAPI = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VOO&apikey=CCIQLR2HA5UI7VG3'
const stockController = require('./controllers/stockController');

app.use(express.static(path.resolve(__dirname, "../build")));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.get('/stock/:id', stockController.getStockData, (req, res) =>{
    // console.log('res.locals.data',res.locals.data);
    return res.status(200).json(res.locals.data);
})

app.use((err, req, res, next) =>{
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
  });

// app.listen(PORT, () =>{
//     console.log('Listening on PORT', PORT);
// })

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    }))
    .catch((error) => {
        console.log(error.message);
    });