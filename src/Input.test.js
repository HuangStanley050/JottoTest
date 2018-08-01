import React from "react";
import { shallow } from 'enzyme';

import { findByTestAtrr, storeFactory } from "../test/testUtils";
import Input from "./Input";
/*global expect*/
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
        test("renders component without error", () => {

        });
        test("does not renders the input box", () => {

        });
        test('does not renders a submit button', () => {

        });
    });
});

describe("updating the state", () => {

});
