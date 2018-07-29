import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";
/*global expect*/

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}

test("Doesn't throw warning with the expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test("renders without error", () => {
        const component = findByTestAtrr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });
    test("renders instruction to guess a word", () => {
        const instructions = findByTestAtrr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("If there are words guessed", () => {
    let guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: guessedWords });
    });
    test("renders without error", () => {
        const component = findByTestAtrr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAtrr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });
    test('correct numbers of guessed words', () => {
        const guessedWordNodes = findByTestAtrr(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });

});
