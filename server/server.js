const express     = require('express');
const path        = require('path');
const http        = require('http');
const bodyParser  = require('body-parser');
const api         = require('./routes/api');
const cors          = require('cors');

const app = express();

app.use(bodyParser.json());
//app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));

//point to dist folder to serve the statics
app.use(express.static(path.join(__dirname, '..', 'dist')));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set api routes
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`API running on localhost:${port}/api`);
  console.log(`WEBSITE running on localhost:${port}`);
});
