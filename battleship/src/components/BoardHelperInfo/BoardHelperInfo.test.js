import React from "react";
import renderer from 'react-test-renderer';
import BoardHelperInfo from './BoardHelperInfo';

describe("BoardHelperInfo Component", () => {
    it('should render properly', () => {
        const tree = renderer.create(<BoardHelperInfo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})