// Counting Pairs Whose Sum is Less than Target

function countPairsWhoseSumLessThanTarget(nums: number[], target: number): number | null {
    if (nums.length === 0) {
        return null;
    }

    let countPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                countPairs++;
            }
        }
    }

    return countPairs;
}

const nums = [-1, 1, 2, 3, 1];
const target = 2;
console.log(countPairsWhoseSumLessThanTarget(nums, target));