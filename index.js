#!/usr/bin/env node

var fs = require('fs');
var pathlib = require('path');

var localCLIPath = pathlib.resolve(process.cwd(), 'node_modules/nostromo/src/cli.js');

try {
    fs.statSync(localCLIPath);
    require(localCLIPath);
}
catch (err) {
    console.log('No local installation of nostromo was found in this directory.')
}
