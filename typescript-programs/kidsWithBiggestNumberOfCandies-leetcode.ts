// Kids with the Biggest Number of Candies

function kidsWithBiggestNumberOfCandies(candies: number[], extraCandies: number): boolean[] | null {
    if (candies.length === 0) {
        return null;
    }

    let maxCandy = Math.max(...candies);

    return candies.map((candy) => candy + extraCandies >= maxCandy);
}

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithBiggestNumberOfCandies(candies, extraCandies));