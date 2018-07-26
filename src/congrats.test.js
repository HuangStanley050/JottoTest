import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
/*global expect*/

import Congrats from "./congrats";
import { findByTestAtrr } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = (props = {}) => shallow(<Congrats {...props} />);

describe("Testing for the Congrats component", () => {
    test("renders without error", () => {

    });
    test("renders no text when \'success\' props is false", () => {

    });
    test("renders non empty congrats message when \'success\' props is true", () => {

    });
});
