import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
/*global expect*/
import rootReducer from "../src/reducers/index";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAtrr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}
