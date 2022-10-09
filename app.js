var fs = require('fs');

var package = fs.readFileSync('./package.json', 'utf8');
alert(package);