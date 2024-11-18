// Counting Prefixes in a Given String

function countPrefixesOfString(words: string[], s: string): number {
    let count = 0;

    for (let word of words) {
        if (s.startsWith(word)) {
            count++;
        }
    }

    return count;
}

const words = ["a", "b", "c", "ab", "bc", "abc"];
const s = "abc";
console.log(countPrefixesOfString(words, s));