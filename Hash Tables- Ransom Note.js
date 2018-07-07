'use strict';

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
   const vocabulary = magazine
    .reduce((hash, word) => {
      hash[word] = (hash[word] || 0) + 1;
      return hash;
    }, {});

  return note
    .every(word => {
      vocabulary[word] -= 1;
      return vocabulary[word] >= 0;
    });
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    console.log(checkMagazine(magazine, note) ? "Yes": "No");
}
