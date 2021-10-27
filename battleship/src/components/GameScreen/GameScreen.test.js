import React from "react";
import { shallow } from "enzyme";
import GameScreen from './GameScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe("rendering components", () => {
    const mockStore = configureStore()

    it("renders GameScreen component without crashing", () => {
        const store = mockStore()
        shallow(<Provider store={store}><GameScreen /></Provider>);
    });
})