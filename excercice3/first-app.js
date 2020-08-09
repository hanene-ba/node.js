const fs = require('fs'); 
// The second element will be the path to the JavaScript file being executed
const newLineFile = fs.readFileSync(process.argv[2],'utf8');


console.log(newLineFile.toString().match(/\n/g).length);