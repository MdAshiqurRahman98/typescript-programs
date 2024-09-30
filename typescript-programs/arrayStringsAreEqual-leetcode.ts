// Checking Array Strings are Equal or Not

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    const string1 = word1.join('');
    const string2 = word2.join('');

    return string1 === string2;
}

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2));