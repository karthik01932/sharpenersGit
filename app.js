const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware');
    next(); //allows the request to continue to the next middleware in line
})
app.use((req,res,next)=>{
    console.log('in another middleware');
    res.send(`<h1> Hello from express</h1>`);
})
// const server lllll= http.createServer(app);

// server.listen(4000);
app.listen(4000);


