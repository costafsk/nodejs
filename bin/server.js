const app = require('../src/app');
const http = require('http');
const utils = require('./utils/index');

const server = http.createServer(app);

const port = utils.portDefault(process.env.PORT || '3000');

app.set('port', port);

server.on('error', utils.onError);
server.on('listening', utils.onListening);

server.listen(port);

module.exports = server;

console.log(`Server is running | port: ${port}`);