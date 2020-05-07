
const express = require ("express");
// Creating the node server
const app = express();
// Port Environment variable
const PORT = process.env.PORT || 5000;
const path = require ("path");

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(8000)

