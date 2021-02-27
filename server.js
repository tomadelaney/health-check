'use strict';
const express = require('express');
// Constants
const PORT = 10256;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('/ Health Check Passed');
});
app.get('/healthz',(req,res)=> {
    res.status(200).send ("/health-check Health check passed");
});
app.get('/health-check',(req,res)=> {
    res.status(200).send ("/health-check Health check passed");
});
app.get('/bad-health',(req,res)=> {
    res.status(500).send('Health check did not pass');
});
app.listen(PORT, HOST);
console.log("Running on http://${HOST}:${PORT}");