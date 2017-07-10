#!/usr/bin/env node

const fs = require('fs');
const pathlib = require('path');

const localCLIPath = pathlib.resolve('node_modules/nostromo/src/cli.js');

try {
    fs.statSync(localCLIPath);
    require(localCLIPath);
}
catch (err) {
    if (err.code === 'ENOENT') {
        console.log('No local installation of nostromo was found in this directory.');
    }
    else {
        console.error(err);
    }
}
