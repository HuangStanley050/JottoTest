export const getLetterMatchCount = (guessWord, secretWord) => {
    const secretLetterSet = new Set(secretWord.split(""));
    const guessedLetterSet = new Set(guessWord.split(""));
    return [...secretWord].filter(letter => guessedLetterSet.has(letter)).length;
};
