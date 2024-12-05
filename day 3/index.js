const fs = require('fs');
let data = fs.readFileSync('./input.txt', 'utf-8');

let total = 0;

const regex = /mul\([0-9][0-9]?[0-9]?,[0-9][0-9]?[0-9]?\)/g;

/*
========================
PART 1
========================

const result = [...data.matchAll(regex)];

function mul(a, b) {
    return a * b;
}

for (let i = 0; i < result.length; i++) {
    const thisOne = result[i][0];

    total += eval(thisOne)
}

console.log(total)
*/

while (true) {
    let doIndex = data.indexOf("do()");
    const dontIndex = data.indexOf("don't()");

    while (true) { 
        if (doIndex < dontIndex && doIndex !== -1) {
            doIndex = data.indexOf("do()", doIndex + 1);
        } else {
            break;
        }
    }

    if (doIndex === -1) {
        data = data.substring(0, dontIndex)
        break;
    } else {
        data = data.substring(0, dontIndex) + data.substring(doIndex + 4)
    }
}

const result = [...data.matchAll(regex)];

function mul(a, b) {
    return a * b;
}

for (let i = 0; i < result.length; i++) {
    const thisOne = result[i][0];

    total += eval(thisOne)
}

console.log(total)