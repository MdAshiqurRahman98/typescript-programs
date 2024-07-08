// Minimum Operations to Make All Elements Divisible by Three

function minimumOperationsToDivisibleByThree(nums: number[]): number | null {
    if (nums.length === 0) {
        return null;
    }

    let operations = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 !== 0) {
            operations = operations + Math.min(nums[i] % 3, 3 - (nums[i] % 3))
        }
    }

    return operations;
}

const nums = [1, 2, 3, 4];
console.log(minimumOperationsToDivisibleByThree(nums));