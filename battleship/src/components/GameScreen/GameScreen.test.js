import React from "react";
import { mount } from "enzyme";
import renderer from 'react-test-renderer';
import GameScreen from './GameScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { createRandomBoard } from '../../helpers/board';

describe("GameScreen Component", () => {
    const { board, ships } = createRandomBoard(true);
    const mockStore = configureStore();

    it('should render properly', () => {
        const store = mockStore({ playerName: 'Name', playerBoard: board, playerShips: ships })
        const tree = renderer.create(<Provider store={store}><GameScreen /></Provider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should redirect to endScreen when click the button', () => {
        const store = mockStore({ playerName: 'Name', playerBoard: board, playerShips: ships })
        const history = createMemoryHistory();
        const wrapper = mount(<Router history={history}><Provider store={store}><GameScreen /></Provider></Router>);
        const button = wrapper.find('GameScreen').find('button');
        button.simulate('click');

        expect(history.length).toBe(2);
        expect(history.location.pathname).toBe('/result');
    });
})