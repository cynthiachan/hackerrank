'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function charsToRemove(a, b) {
  let freqs = {};
  a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1); // increment
  b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1); // decrement
  return Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0);
}

function main() {
    const a = readLine();

    const b = readLine();

    console.log(charsToRemove(a, b));
}
