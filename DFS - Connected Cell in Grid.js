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


function getRegionSize(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
        return 0;
    }
    if (grid[row][col] == 0) {
        return 0;
    }
    grid[row][col] = 0;
    var size = 1;
    for(var r = row - 1; r <= row + 1; r++) {
        for(var c = col - 1 ; c <= col + 1; c++) {
            size += getRegionSize(grid, r, c);
        }
    }
    return size;
}
function getBiggestRegion(grid) {
    var maxRegion = 0, size;
    for( var row = 0 ; row < grid.length; row++) {
        for( var col = 0; col < grid[row].length; col++) {
            if (grid[row][col] == 1) {
                size = getRegionSize(grid, row, col);
                maxRegion = Math.max(size, maxRegion);
            }
        }
    }
    return maxRegion;
}
function main() {
    const n = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let grid = Array(n);

    for (let i = 0; i < n; i++) {
        grid[i] = readLine().split(' ').map(gridTemp => parseInt(gridTemp, 10));
    }
  //  console.log(grid)
    console.log(getBiggestRegion(grid));
}
