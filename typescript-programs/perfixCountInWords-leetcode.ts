// Counting Words with a Given Prefix

function perfixCountInWords(words: string[], pref: string): number {
    let count = 0;

    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }

    return count;
}

const words = ["pay", "attention", "practice", "attend"];
const pref = "at";
console.log(perfixCountInWords(words, pref));