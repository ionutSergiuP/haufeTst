'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World Test new update');
});

//health check
app.get('/health-check', (req, res) => {
    res.send('healt check');
});

//create new user
app.get('/create-new-user', (req, res) => {
    res.send('Create new user');
});

//login
app.get('/login', (req, res) => {
    res.send('Login user');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);