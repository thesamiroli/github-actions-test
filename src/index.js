const express = require('express');
const morgan = require('morgan');
const utils = require('./utils');

console.log(utils)

const app = express();
const cors = require('cors');
app.use(morgan(':method :url :status :response-time ms :user-agent :date[web]'));


app.use(cors());

app.use('/api', (req, res) => {
    res.json({ msg: "Hello World! Life is beautiful." })
})

app.use('/mol', (req, res) => {
    res.json({ msg: `The meaning of life is ${utils.getTheMeaningOfLife()}` })
})

app.get('/square/:num', (req, res) => {
    const num = req.params.num;
    res.json({msg: `The square of ${num} is ${utils.square(num)}`});
})

app.use((req, res, next) => {
    res.json({ msg: "You have entered the error handling middleware" })
})
console.log("hlaieka")
const port = 8005;

app.listen(port, () => console.log("Listening on " + port));
