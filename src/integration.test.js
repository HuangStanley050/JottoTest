import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions/index";
/*global expect*/

describe("guessword action dispatcher", () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe("no guessed words", () => {
        let store;
        const initialState = { secretWord: secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test("update state successfully for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }]
            };
            expect(newState).toEqual(expectedState);

        });
        test("update state successfully for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            };
            expect(newState).toEqual(expectedState);
        });
    });
    describe("some guessed words", () => {
        const guessedWords = [{
            guessedWord: 'agile',
            letterMatchCount: 1
        }];
        const initialState = {
            guessedWords: guessedWords,
            secretWord: secretWord
        };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test("update state successfully for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord: secretWord,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
            };
            expect(newState).toEqual(expectedState);
        });
        test("update state successfully for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord: secretWord,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
