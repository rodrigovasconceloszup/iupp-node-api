const app = require('./app');
const http = require('http');

port = process.env.APP_PORT || 3000;

const server = http.createServer(app);

server.listen(port,() => {
    console.log(`Server started, listening on port: ${process.env.APP_PORT}`);
  });