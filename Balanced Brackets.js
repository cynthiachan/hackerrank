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

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const expression = readLine();
        console.log(isBalanced(expression)? "YES" : "NO")
    }
}
function isBalanced(str) {
    var stack = []
    var open = {"{" : "}", "[" : "]", "(" : ")"}
    var closed = {"}" : true, "]" : true, ")" : true}
    for(var i = 0; i < str.length; i++) {
        var char = str[i]
        if(open[char]) {
            stack.push(char)
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false
        }
    }
    return stack.length === 0
}
