/**
 * Question: LeetCode 832. Flipping an Image
 * Description: Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
 * To flip horizontally means that each row of the image is reversed. To invert means each 0 is replaced by 1, and each 1 is replaced by 0.
 */

/**
 * Optimal Solution: Two Pointers In-Place Reversal and XOR Inversion
 * Description: Iterate each row. Maintain two pointers for the start and end of the row. Swap the elements at the pointers and simultaneously invert them using XOR 1 (`^ 1`).
 * Time Complexity: O(n * (m/2)) where n is the number of rows and m is the number of columns.
 * Space Complexity: O(1) since it modifies the array in-place.
 */
function flipImageOptimal(image) {
    let n = image.length;

    for (let i = 0; i < n; i++) {
        let l = 0;
        let r = image[i].length - 1;
        while (l <= r) {
            let temp = image[i][l]; // Store original left item
            
            // If they are equal, we only need to invert it once. 
            // If we swapped properly for l===r, temp is element.
            if(l === r) {
                image[i][l] = image[i][l] ^ 1;
            } else {
                image[i][l] = image[i][r] ^ 1;
                image[i][r] = temp ^ 1;
            }

            l++;
            r--;
        }
    }

    return image;
}

const image = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipImageOptimal(image));