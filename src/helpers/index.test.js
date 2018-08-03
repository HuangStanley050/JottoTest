import { getLetterMatchCount } from "./index";
/*global expect*/

describe("getLetterMatchCount", () => {
    const secretWord = 'party';
    test("returns correct match count when there's no matching letters", () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test("returns correct match count when there's three matching letters", () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test("returns correct match count where's duplicate letters in the guess", () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });

});
