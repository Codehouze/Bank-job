
const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 8000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  

  // Priority serve any static files.
  app.use(express.static(path.join(__dirname, 'client/build')));

  //production 
  if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'client/build'))); 
  
    // All remaining requests return the React app, so it can handle routing.
  app.get('*',(req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });}
  }

  // Answer API requests.
  app.get('/api',(req, res)=> {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
