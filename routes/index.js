
//var express = require('express');
//var router = express.Router();

///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//module.exports = router;

'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.get('/health-check',(req,res)=> {
  res.send ("Health check passed");
});
app.get('/bad-health',(req,res)=> {
  res.status(500).send('Health check did not pass');
});
app.listen(PORT, HOST);
console.log("Health Check Running");