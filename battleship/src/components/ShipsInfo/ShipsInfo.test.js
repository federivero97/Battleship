import React from "react";
import { shallow } from "enzyme";
import ShipsInfo from './ShipsInfo';
import renderer from 'react-test-renderer';

describe("ShipsInfo Components", () => {
    it('should render properly when ships is empty', () => {
        const tree = renderer.create(<ShipsInfo ships={[]} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly when ships is not empty', () => {
        const ships = [{length: 4}, {length: 3}, {length: 4}, {length: 4}]
        const tree = renderer.create(<ShipsInfo ships={ships} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})