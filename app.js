var fs = require('fs');

try {
    const platform = document.querySelector('#platform');
    const version = document.querySelector('#version');
    const package = document.querySelector('#package');
    platform.textContent = process.platform;
    version.textContent = process.version;
    package.textContent = fs.readFileSync('./package.json', 'utf8');
} catch (error) {
    alert(error);
}
