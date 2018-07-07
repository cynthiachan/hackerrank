'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the primality function below.
function primality(n) {
     if (n == 2) return true
     if (n < 2 || n % 2 == 0) {
         return false
     }
     const sqrt = Math.floor(Math.sqrt(n))
     for (var i = 2; i <= sqrt ; i++) {
         if (n % i == 0) {
             return false
         }
     }
    return n !== 1
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const p = parseInt(readLine(), 10);

    for (let pItr = 0; pItr < p; pItr++) {
        const n = parseInt(readLine(), 10);

        const result = primality(n) ? "Prime" : "Not prime";

        ws.write(result + '\n');
    }

    ws.end();
}
