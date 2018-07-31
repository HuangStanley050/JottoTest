import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";
/*global expect*/

test('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('retuns state of true upon receivng an action of type `CORRECT GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
});
