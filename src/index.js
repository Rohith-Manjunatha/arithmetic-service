const express = require('express');
const cors = require('cors');
const { add } = require("./arthimetica")
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arthmetic Service - last updated 02/15/2024-03:30PM');
});

app.get('/add/:n/:m',(req,res) => {
    let n = Number(req.params.n); 
    let m = Number(req.params.m);
    let sum = add(n,m);
    res.json(sum);
});

app.get('/evaluate/:expression' ,(req, res) => {
    const decodedExpression = decodeURIComponent(req.params.expression);
    res.json(eval(decodedExpression));
});

app.listen(port);
