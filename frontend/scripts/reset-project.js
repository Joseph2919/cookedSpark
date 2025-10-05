const fs = require('fs');
const { execSync } = require('child_process');

console.log('Resetting node_modules and clearing cache...');
execSync('rm -rf node_modules');
execSync('npm cache clean --force');
execSync('npm install');
console.log('Project reset complete.');