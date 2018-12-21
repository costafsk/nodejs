const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodejs:server');
const utils = require('./utils/index');

const server = http.createServer(app);

const port = utils.portDefault(process.env.PORT || '3000');

app.set('port', port);

server.on('error', utils.onError);

server.listen(port);
console.log(`Server is running | port: ${port}`);