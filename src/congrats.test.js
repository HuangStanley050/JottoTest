import React from "react";
import { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
/*global expect*/

import Congrats from "./congrats";
import { findByTestAtrr, checkProps } from "../test/testUtils";
//import checkPropTypes from "check-prop-types";



const defaultProps = { success: false };

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);

}

describe("Testing for the Congrats component", () => {
    test("renders without error", () => {
        const wrapper = setup({ success: false });
        const component = findByTestAtrr(wrapper, 'component-congrats');
        expect(component.length).toBe(1);
    });
    test("renders no text when \'success\' props is false", () => {
        const wrapper = setup({ success: false });
        const component = findByTestAtrr(wrapper, 'component-congrats');
        expect(component.text()).toBe("");

    });
    test("renders non empty congrats message when \'success\' props is true", () => {
        const wrapper = setup({ success: true });
        const message = findByTestAtrr(wrapper, 'congrats-message');
        expect(message.text().length).not.toBe(0);

    });
    test("Does not throw warning with expected props", () => {
        const expectedProps = { success: false };
        checkProps(Congrats, expectedProps);
    });
});
