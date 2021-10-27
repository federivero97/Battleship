import React from "react";
import { shallow } from "enzyme";
import StartScreen from './StartScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe("rendering components", () => {
    const mockStore = configureStore()

    it("renders StartScreen component without crashing", () => {
        const store = mockStore()
        shallow(<Provider store={store}><StartScreen /></Provider>);
    });
})