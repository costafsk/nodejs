const utils = {
    portDefault: function(val) {
        const port = parseInt(val, 10);

        if (isNaN(port)) return val;

        if(port >= 0) return port;

        return false;
    },
    onError: function(error) {
        console.error(`Keep calm bro, this is a error code ${error.code}`);
    }
}

module.exports = utils;
