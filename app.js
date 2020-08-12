const express = require('express');
//require('dotenv').config();
console.log(process.env.APP);

const candidatesRouter = require('./Routers/candidatesRouter');

const app = express();
const port = process.env.PORT || 3000

app.use('/candidates', candidatesRouter);


app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app; 
