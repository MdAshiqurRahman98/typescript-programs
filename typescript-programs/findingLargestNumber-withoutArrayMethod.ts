// Finding Largest Number in an Array without Array Method

function findLargestNumber(numbers: number[]): number {
    let largestNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;
}

const array = [1, 3, 5, 7, 9];
console.log(findLargestNumber(array));