// Permutation Difference Between Two Strings

function permutationDifference(s: string, t: string): number {
    let difference = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const sIndex = i;
        const tIndex = t.indexOf(char);
        difference += Math.abs(sIndex - tIndex);
    }

    return difference;
}

const s = "abc";
const t = "bac";
console.log(permutationDifference(s, t));