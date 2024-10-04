// Finding First Palindromic String in an Array

function firstPalindrome(words: string[]): string {
    function isPalindrome(word: string): boolean {
        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    for (let word of words) {
        if (isPalindrome(word)) {
            return word;
        }
    }

    return "";
}

const words = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words));