// Count Elements with Strictly Smaller and Greater Elements

function countElements(nums: number[]): number {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);

    let count = 0;

    for (let num of nums) {
        if (num > minVal && num < maxVal) {
            count++;
        }
    }

    return count;
}

const nums = [11, 7, 2, 15];
console.log(countElements(nums));