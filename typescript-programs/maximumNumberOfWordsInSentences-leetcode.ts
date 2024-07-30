// Maximum Number of Words Found in Sentences

const maximumNumberOfWordsInSentences = (sentences: string[]): number | null => {
    if (sentences.length === 0) {
        return null;
    }

    let maximumWords = 0;

    for (const sentence of sentences) {
        const wordCount = sentence.split(' ').length;

        if (wordCount > maximumWords) {
            maximumWords = wordCount;
        }
    }

    return maximumWords;
}

const sentences = ["bangladesh is my country", "bangladesh is a beautiful country", "my mother tongue is bengali"];
console.log(maximumNumberOfWordsInSentences(sentences));