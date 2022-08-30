const express = require('express');
// import bodyParser from 'body-parser';
const mongoose = require('mongoose');
// import cors from 'cors';
const path = require('path');
// import postRoutes from './routes/posts.js'

const app = express();

// app.use('/posts', postRoutes)

// app.use(bodyParser.json({limit: "30mb", extended:true}));
// app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
// app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../index.html'));
})

const CONNECTION_URL = 'mongodb+srv://ajm3598:tiger3598@cluster0.8hvc6t6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    }))
    .catch((error) => {
        console.log(error.message);
    });
