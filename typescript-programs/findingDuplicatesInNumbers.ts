// Finding Duplicates in an Array

function findDuplicates(arr: number[]): number[] {
    const frequency: object = {};
    const duplicates: number[] = [];

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (let num in frequency) {
        if (frequency[num] > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}

const array = [1, 33, 4, 8, 1, 8, 90];
console.log(findDuplicates(array));