import React from "react";
import { mount } from "enzyme";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import EndScreen from './EndScreen';

describe("EndScreen Component", () => {
    const mockStore = configureStore()

    it('should render properly', () => {
        const store = mockStore({gameResult: {result: true, message: 'YOU WON'}})
        const tree = renderer.create(<Provider store={store}><EndScreen /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should redirect to startScreen when click the button', () => {
        const history = createMemoryHistory();
        const store = mockStore({gameResult: {result: false, message: 'YOU LOST'}})
        const wrapper = mount(<Router history={history}><Provider store={store}><EndScreen /></Provider></Router>);
        const button = wrapper.find('EndScreen').find('button');
        button.simulate('click');

        expect(history.length).toBe(2);
        expect(history.location.pathname).toBe('/start');
    });
})