// Finding Largest Number in an Array

function findLargestNumber(numbers: number[]): number {
    numbers.sort((a, b) => b - a);

    return numbers[0];
}

const numbersArray = [1, 3, 5, 7, 9];
console.log(findLargestNumber(numbersArray));