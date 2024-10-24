// Finding the Difference of Two Arrays

function findDifferenceOfTwoArrays(nums1: number[], nums2: number[]): number[][] {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let difference1 = [...set1].filter(x => !set2.has(x));
    let difference2 = [...set2].filter(x => !set1.has(x));

    return [difference1, difference2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDifferenceOfTwoArrays(nums1, nums2));