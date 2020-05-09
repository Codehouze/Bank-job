
const express = require('express');
const path = require('path');
const numCPUs = require('os').cpus().length;
const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 8000;



  // Priority serve any static files.
  app.use(express.static(path.join(__dirname, 'client/build')));

  //production 
  if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build')); 
  
    // All remaining requests return the React app, so it can handle routing.
  app.get('*',(req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });}
  

  // Answer API requests.
  app.get('/api',(req, res)=> {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
