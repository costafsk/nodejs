'use strict';

const utils = {
    portDefault: function(val) {
        const port = parseInt(val, 10);

        if (isNaN(port)) return val;

        if(port >= 0) return port;

        return false;
    },
    onError: function(error) {
        console.error(`Keep calm bro, this is a error code ${error.code}`);
    },
    onListening: function() {
        const debug = require('debug');
        const addr = require('../server').address();
        const bind = typeof addr === 'string' ? `pipe:${addr}`:`port:${addr.port}`;
        debug(`Listening on ${bind}`);
    }
}

module.exports = utils;
