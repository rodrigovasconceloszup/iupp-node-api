const app = require('./app');
const http = require('http');

port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);