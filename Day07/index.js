const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello!');
})

app.get('/products', (req, res) => {
    res.send(req.query.limit);
} )

app.get('./ab?cd', (req, res) => {
    res.send('abcd where b is optional');
})


app.get('./e(fg)?h', (req, res) => {
    res.send('efgh where fg is optional');
})


app.get('./ij+kl', (req, res) => {
    res.send('ijjjjjjjjjjjjjjjjjjjjjjjkl');
})


app.get('./mn*op', (req, res) => {
    res.send('anything between mn and op');
})

app.get(/q/, (req, res) => {
    res.send('anything that starts with q');
})


app.get(/.*fly$/, (req, res) => {
    res.send('anything that ends with fly');
})


app.get('/user/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
})



app.listen(5000);