import React from "react";
import { mount, shallow } from "enzyme";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import StartScreen from './StartScreen';

describe("StartScreen Component", () => {
    const mockStore = configureStore();

    it('should render properly', () => {
        const store = mockStore()
        const tree = renderer.create(<Provider store={store}><StartScreen /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should set a random board when click the button', () => {
        const store = mockStore()
        const history = createMemoryHistory();
        const wrapper = mount(<Router history={history}><Provider store={store}><StartScreen /></Provider></Router>);
        const buttons = wrapper.find('StartScreen').find('button');
        buttons.at(0).simulate('click');
        buttons.at(1).simulate('click');
        buttons.at(2).simulate('click');
    });
})