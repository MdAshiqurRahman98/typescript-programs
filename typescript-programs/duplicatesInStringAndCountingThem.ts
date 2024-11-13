// Finding Duplicates in a String and Counting Them

function duplicatesInStringAndCountingThem(str: string): object {
    const frequency = {};
    const duplicates = {};

    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let char in frequency) {
        if (frequency[char] > 1) {
            duplicates[char] = frequency[char];
        }
    }

    return duplicates;
}

const str = "abcda";
console.log(duplicatesInStringAndCountingThem(str));