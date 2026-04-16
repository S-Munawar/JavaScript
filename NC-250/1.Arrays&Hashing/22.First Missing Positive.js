function firstMissingPositive(nums) {
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }

        for (let i = 0; i < n; i++) {
            const val = Math.abs(nums[i]);
            if (val >= 1 && val <= n) {
                if (nums[val - 1] > 0) {
                    nums[val - 1] *= -1;
                } else if (nums[val - 1] === 0) {
                    nums[val - 1] = -1 * (n + 1);
                }
            }
        }

        for (let i = 1; i <= n; i++) {
            if (nums[i - 1] >= 0) {
                return i;
            }
        }

        return n + 1;
    }

function firstMissingPositive2(nums) {

        let set = new Set(nums)
        let res = 1

        while(true) {
            if(set.has(res)) {
                res++
            }
            else {
                return res
            }
        }
        

    }

function firstMissingPositive3(nums) {

        nums.sort((a, b) => a - b)
        let res = 1
        for(const num of nums) {
            if(num > 0 && num === res) {
                res++
            }
        }
        return res
    }

function firstMissingPositive(nums) {
        let missing = 1;
        while (true) {
            let flag = true;
            for (let num of nums) {
                if (missing === num) {
                    flag = false;
                    break;
                }
            }
            if (flag) return missing;
            missing++;
        }
    }