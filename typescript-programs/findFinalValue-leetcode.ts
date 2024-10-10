// Keeping Multiplying Found Values by Two

function findFinalValue(nums: number[], original: number): number {
    while (nums.includes(original)) {
        original = original * 2;
    }

    return original;
}

const nums1 = [5, 3, 6, 1, 12];
const original = 3;
console.log(findFinalValue(nums1, original));