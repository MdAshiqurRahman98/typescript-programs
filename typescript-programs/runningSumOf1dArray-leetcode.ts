// Running Sum of 1D Array

function runningSumOf1dArray(nums: number[]): number[] | null {
    if (nums.length === 0) {
        return null;
    }

    let result = new Array(nums.length);
    result[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] + nums[i];
    }

    return result;
}

const nums = [1, 2, 3, 4];
console.log(runningSumOf1dArray(nums));