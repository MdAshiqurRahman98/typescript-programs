// Left and Right Sum Differences

function leftAndRightSumDifferences(nums: number[]): number[] | null {
    if (nums.length === 0) {
        return null;
    }

    const leftSum = new Array(nums.length).fill(0);
    const rightSum = new Array(nums.length).fill(0);
    const answer = new Array(nums.length).fill(0);

    for (let i = 1; i < nums.length; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer;
}

const numbers = [10, 4, 8, 3];
console.log(leftAndRightSumDifferences(numbers));