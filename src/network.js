const express = require('express');
const app = express();
const axios = require('axios');

let nodes = [];

app.post('/register-node', (req, res) => {
    const newNodeUrl = req.body.newNodeUrl;
    if (!nodes.includes(newNodeUrl)) {
        nodes.push(newNodeUrl);
    }
    res.json({ message: 'New node registered successfully', nodes });
});

app.listen(3001, () => {
    console.log('Network running on port 3001');
});
