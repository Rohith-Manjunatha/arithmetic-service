const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arthmetic Service - Hello World!');
});

app.get('/add/:n/:m',(req,res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.get('/evaluate/:expression' ,(req, res) => {
    const decodedExpression = decodeURIComponent(req.params.expression);
    res.json(eval(decodedExpression));
});

app.listen(port);
