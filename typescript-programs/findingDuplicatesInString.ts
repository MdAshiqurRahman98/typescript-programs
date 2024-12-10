// Finding Duplicates in a String

function findDuplicatesInString(str: string): string[] {
    const frequency: object = {};
    const duplicates: string[] = [];

    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let char in frequency) {
        if (frequency[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

const string = "abcdeac";
console.log(findDuplicatesInString(string));