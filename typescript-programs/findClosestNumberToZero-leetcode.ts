// Finding Closest Number to Zero

function findClosestNumberToZero(nums: number[]): number {
    let closestNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if ((Math.abs(nums[i]) < Math.abs(closestNumber)) || (Math.abs(nums[i]) === Math.abs(closestNumber) && nums[i] > closestNumber)) {
            closestNumber = nums[i];
        }
    }

    return closestNumber;
}

const nums = [-4, 2, 1, 4, 8];
console.log(findClosestNumberToZero(nums));