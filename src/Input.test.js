import React from "react";
import { shallow } from 'enzyme';

import { findByTestAtrr, storeFactory } from "../test/testUtils";
import Input from "./Input";
/*global expect*/
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive();

};



describe("renders", () => {
    describe('word has not been guessed', () => {
        test("renders component without error", () => {

        });
        test("renders the input box", () => {

        });
        test('renders a submit button', () => {

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
