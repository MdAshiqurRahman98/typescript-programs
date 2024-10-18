// Divide Array into Equal Pairs

function divideArrayIntoEqualPairs(nums: number[]): boolean {
    let freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let count of freqMap.values()) {
        if (count % 2 !== 0) {
            return false;
        }
    }

    return true;
}

console.log(divideArrayIntoEqualPairs([3, 2, 3, 2, 2, 2]));