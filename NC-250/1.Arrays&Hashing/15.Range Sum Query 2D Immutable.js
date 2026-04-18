/**
 * 304. Range Sum Query 2D - Immutable
 * 
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 * Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * 
 * Implement the NumMatrix class:
 * NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 */

const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
]

// Two Dimensional Prefix Sum (Optimal)
// Time complexity: O(1) for each query
// Space complexity: O(m * n) where m is the number of rows and n is the number of cols
class NumMatrix1 {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length,
            COLS = matrix[0].length;
        this.sumMat = Array.from({ length: ROWS + 1 }, () =>
            Array(COLS + 1).fill(0),
        );

        for (let r = 0; r < ROWS; r++) {
            let prefix = 0;
            for (let c = 0; c < COLS; c++) {
                prefix += matrix[r][c];
                const above = this.sumMat[r][c + 1];
                this.sumMat[r + 1][c + 1] = prefix + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        const bottomRight = this.sumMat[row2][col2];
        const above = this.sumMat[row1 - 1][col2];
        const left = this.sumMat[row2][col1 - 1];
        const topLeft = this.sumMat[row1 - 1][col1 - 1];
        return bottomRight - above - left + topLeft;
    }
}

// One Dimensional Prefix Sum
// Time complexity: O(m) for each query where m is the number of rows
// Space complexity: O(m * n) where m is the number of rows and n is the number of cols
class NumMatrix2 {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixSum = Array.from({ length: matrix.length }, () =>
            Array(matrix[0].length).fill(0),
        );

        for (let row = 0; row < matrix.length; row++) {
            this.prefixSum[row][0] = matrix[row][0];
            for (let col = 1; col < matrix[0].length; col++) {
                this.prefixSum[row][col] =
                    this.prefixSum[row][col - 1] + matrix[row][col];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let res = 0;
        for (let row = row1; row <= row2; row++) {
            if (col1 > 0) {
                res +=
                    this.prefixSum[row][col2] - this.prefixSum[row][col1 - 1];
            } else {
                res += this.prefixSum[row][col2];
            }
        }
        return res;
    }
}

// Brute Force
// Time complexity: O(m * n) for each query
// Space complexity: O(1)
class NumMatrix3 {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let res = 0;
        for (let r = row1; r <= row2; r++) {
            for (let c = col1; c <= col2; c++) {
                res += this.matrix[r][c];
            }
        }
        return res;
    }
}


console.log("Two Dimensional Prefix Sum (Optimal):")
const numMatrix1 = new NumMatrix1(matrix)
console.log(numMatrix1.sumRegion(2, 1, 4, 3)) 
console.log(numMatrix1.sumRegion(1, 1, 2, 2)) 
console.log(numMatrix1.sumRegion(1, 2, 2, 4)) 

console.log("\nOne Dimensional Prefix Sum:")
const numMatrix2 = new NumMatrix2(matrix)
console.log(numMatrix2.sumRegion(2, 1, 4, 3)) 
console.log(numMatrix2.sumRegion(1, 1, 2, 2)) 
console.log(numMatrix2.sumRegion(1, 2, 2, 4)) 

console.log("\nBrute Force:")
const numMatrix3 = new NumMatrix3(matrix)
console.log(numMatrix3.sumRegion(2, 1, 4, 3)) 
console.log(numMatrix3.sumRegion(1, 1, 2, 2)) 
console.log(numMatrix3.sumRegion(1, 2, 2, 4)) 
