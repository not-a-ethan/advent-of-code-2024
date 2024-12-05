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