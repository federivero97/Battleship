import React from "react";
import { shallow, mount } from 'enzyme';
import Cell from './Cell';
import renderer from 'react-test-renderer';

describe("Cell Component", () => {
    it('should render properly', () => {
        const tree = renderer.create(<Cell />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("when color is red then the cell's background color is red ", () => {
        const wrapper = shallow(<Cell color="red" />);
        expect(wrapper.find('td').props().style.backgroundColor).toBe("red");
    });

    it("when color is blue then the cell's background color is blue ", () => {
        const wrapper = shallow(<Cell color="blue" />);
        expect(wrapper.find('td').props().style.backgroundColor).toBe("blue");
    });


    it("when dont set handleCellClick, it is the default prop", () => {
        const wrapper = mount(<Cell />);
        expect(wrapper.props().handleCellClick).toBe(Cell.defaultProps.handleCellClick);
        expect(wrapper.props().handleCellClick()).toBe(undefined);
    });

    it("when dont set handleOnDragStart, it is the default prop", () => {
        const wrapper = mount(<Cell />);
        expect(wrapper.props().handleOnDragStart).toBe(Cell.defaultProps.handleOnDragStart);
        expect(wrapper.props().handleOnDragStart()).toBe(undefined);
    });

    it("when dont set handleOnDragEnter, it is the default prop", () => {
        const wrapper = mount(<Cell />);
        expect(wrapper.props().handleOnDragEnter).toBe(Cell.defaultProps.handleOnDragEnter);
        expect(wrapper.props().handleOnDragEnter()).toBe(undefined);
    });
    
    it("when dont set handleOnDragEnd, it is the default prop", () => {
        const wrapper = mount(<Cell />);
        expect(wrapper.props().handleOnDragEnd).toBe(Cell.defaultProps.handleOnDragEnd);
        expect(wrapper.props().handleOnDragEnd()).toBe(undefined);
    });

    it("when set handleCellClick, it has to do this", () => {
        let a = 0
        const wrapper = mount(<Cell handleCellClick={() => a += 1}/>);
        wrapper.find('td').simulate('click');
        expect(a).toBe(1);
    });

    it("when set handleOnDragStart, it has to do this", () => {
        let a = 0
        const wrapper = mount(<Cell handleOnDragStart={() => a += 1}/>);
        wrapper.find('td').simulate('dragStart');
        expect(a).toBe(1);
    });

    it("when set handleOnDragEnter, it has to do this", () => {
        let a = 0
        const wrapper = mount(<Cell handleOnDragEnter={() => a += 1}/>);
        wrapper.find('td').simulate('dragEnter');
        wrapper.find('td').simulate('dragEnter');
        expect(a).toBe(2);
    });

    it("when set handleOnDragEnd, it has to do this", () => {
        let a = 0
        const wrapper = mount(<Cell handleOnDragEnd={() => a += 1}/>);
        wrapper.find('td').simulate('dragEnd');
        expect(a).toBe(1);
    });
})