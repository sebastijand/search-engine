const fs = require('fs');
var text = fs.readFileSync("./long.txt").toString('utf-8');


function charFilter(currentText){
    var currentText = text.replace(/[&\/\\#,+()$~%.'":!*?<>{}^_^]/g, '').split(" "); 
    return currentText;
}

console.log(charFilter())


function twoWords(){
}


function threeWords(){    
}

function fourWords(){
}


module.exports = charFilter;
module.exports = twoWords;
module.exports = threeWords;
module.exports = fourWords;
