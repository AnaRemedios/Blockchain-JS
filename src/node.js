const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

const app = express();
const port = 3000;

const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get('/blockchain', (req, res) => {
    res.send(blockchain);
});

app.post('/transaction', (req, res) => {
    const { fromAddress, toAddress, amount } = req.body;
    const transaction = new Transaction(fromAddress, toAddress, amount);
    blockchain.createTransaction(transaction);
    res.send('Transaction added successfully');
});

app.post('/mine', (req, res) => {
    blockchain.minePendingTransactions('miner-address');
    res.send('Mining completed');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
