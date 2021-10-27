import React from "react";
import { shallow } from "enzyme";
import EndScreen from './EndScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

describe("rendering components", () => {
    const mockStore = configureStore()

    it("renders EndScreen component without crashing", () => {
        const store = mockStore()
        shallow(<Provider store={store}><EndScreen /></Provider>);
    });
})