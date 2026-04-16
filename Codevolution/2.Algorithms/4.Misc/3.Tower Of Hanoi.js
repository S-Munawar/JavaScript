/**
 * Question: Solve the Tower of Hanoi puzzle for n disks.
 * Description: Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective is to move the entire stack to another rod, obeying the rules: only one disk can be moved at a time, and no disk may be placed on top of a smaller disk.
 */

/**
 * Optimal Solution: Recursion
 * Description: Divide the problem. Move n-1 disks to the intermediate rod. Move the largest disk to the destination rod. Finally move n-1 disks from intermediate to destination rod.
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) (Recursive Call Stack)
 */
function towerOfHanoi(n, from, to, via) {
    if (n === 1) {
        console.log(`Move ${from} -> ${to}`);
        return;
    }
    towerOfHanoi(n - 1, from, via, to);
    console.log(`Move ${n}th ${from} -> ${to}`);
    towerOfHanoi(n - 1, via, to, from);
}

towerOfHanoi(3, 'A', 'B', 'C');