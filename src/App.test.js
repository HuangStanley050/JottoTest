import React from 'react';

import { shallow } from "enzyme";
import { storeFactory } from "../test/testUtils";
import App, { UnconnectedApp } from './App';
/*global expect*/
/*global jest*/

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store}/>).dive();
  return wrapper;

};

describe("redux properties", () => {
  test("has access to the success state", () => {
    const success = true;
    const wrapper = setup({ success: success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("has access to the secretword state", () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord: secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);

  });
  test("has access to the guesswords state", () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test("getSecretWord is a action creator is a funtion on the props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test("'getSecretWord' runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }
  const wrapper = shallow(<UnconnectedApp {...props}/>);
  //run life cycle method
  wrapper.instance().componentDidMount();
  const getSecretWordCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCount).toBe(1);
});
