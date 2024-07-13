// Smaller Numbers than the Current Number

function smallerNumbersThanCurrentNumber(nums: number[]): number[] | null {
    if (nums.length === 0) {
        return null;
    }

    let result = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                result[i]++;
            }
        }
    }

    return result;
}

const numbers = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrentNumber(numbers));