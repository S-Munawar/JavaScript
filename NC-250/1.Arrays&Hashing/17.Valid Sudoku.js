/**
 * 36. Valid Sudoku
 * 
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// Modified board1 to insert '8' twice in the first column to test false cases
const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


// Bitmask (Optimal)
// Time complexity: O(n^2) where n is 9
// Space complexity: O(n) for the integer tracker array sizes
function isValidSudoku1(board) {
    let rows = new Array(9).fill(0);
    let cols = new Array(9).fill(0);
    let squares = new Array(9).fill(0);

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') continue;

            let val = board[r][c] - '1';

            if (
                rows[r] & (1 << val) ||
                cols[c] & (1 << val) ||
                squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] &
                    (1 << val)
            ) {
                return false;
            }

            rows[r] |= 1 << val;
            cols[c] |= 1 << val;
            squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)] |= 1 << val;
        }
    }
    return true;
}

// Hash Set (One Pass)
// Time complexity: O(n^2) where n is 9
// Space complexity: O(n^2) tracking elements internally inside mapped Sets
function isValidSudoku2(board) {
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') continue;

            const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

            if (
                (rows.get(r) && rows.get(r).has(board[r][c])) ||
                (cols.get(c) && cols.get(c).has(board[r][c])) ||
                (squares.get(squareKey) &&
                    squares.get(squareKey).has(board[r][c]))
            ) {
                return false;
            }

            if (!rows.has(r)) rows.set(r, new Set());
            if (!cols.has(c)) cols.set(c, new Set());
            if (!squares.has(squareKey)) squares.set(squareKey, new Set());

            rows.get(r).add(board[r][c]);
            cols.get(c).add(board[r][c]);
            squares.get(squareKey).add(board[r][c]);
        }
    }
    return true;
}

// Brute Force
// Time complexity: O(n^2) strictly checking all boxes iteratively multiple times
// Space complexity: O(n)
function isValidSudoku3(board) {
    for (let row = 0; row < 9; row++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === '.') continue;
            if (seen.has(board[row][i])) return false;
            seen.add(board[row][i]);
        }
    }

    for (let col = 0; col < 9; col++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === '.') continue;
            if (seen.has(board[i][col])) return false;
            seen.add(board[i][col]);
        }
    }

    for (let square = 0; square < 9; square++) {
        let seen = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let row = Math.floor(square / 3) * 3 + i;
                let col = (square % 3) * 3 + j;
                if (board[row][col] === '.') continue;
                if (seen.has(board[row][col])) return false;
                seen.add(board[row][col]);
            }
        }
    }

    return true;
}


console.log("Bitmask (Optimal):")
console.log(isValidSudoku1(board1)) 
console.log(isValidSudoku1(board2))

console.log("\nHash Set (One Pass):")
console.log(isValidSudoku2(board1))
console.log(isValidSudoku2(board2))

console.log("\nBrute Force:")
console.log(isValidSudoku3(board1))
console.log(isValidSudoku3(board2))
