import React from "react";
import { shallow } from 'enzyme';

import { findByTestAtrr, storeFactory } from "../test/testUtils";
import Input, { UnconnectedInput } from "./Input";
/*global expect*/
/*global jest*/
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive();
    return wrapper;

};



describe("renders", () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);

        });
        test("renders component without error", () => {
            const component = findByTestAtrr(wrapper, "component-input");
            expect(component.length).toBe(1);

        });
        test("renders the input box", () => {
            const inputBox = findByTestAtrr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);

        });
        test('renders a submit button', () => {
            const submitButton = findByTestAtrr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test("renders component without error", () => {
            const component = findByTestAtrr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test("does not renders the input box", () => {
            const inputBox = findByTestAtrr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });
        test('does not renders a submit button', () => {
            const submitButton = findByTestAtrr(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });
    });
});

describe("redux props", () => {
    test("has success piece of state as a prop", () => {
        const success = true;
        const wrapper = setup({ success: success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test("guessWord action creator is a function prop", () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe("guessword action creator call", () => {
    test("calls 'guessword' when the submit button is clicked", () => {
        const guessWordMock = jest.fn();
        const props = {
            guessWord: guessWordMock
        };
        const wrapper = shallow(<UnconnectedInput {...props}/>);
        const submitButton = findByTestAtrr(wrapper, "submit-button");
        submitButton.simulate("click");
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });
});
