import React from "react";
import { shallow, mount } from 'enzyme';
import Board from './Board';
import renderer from 'react-test-renderer';

describe("Board Component", () => {
    const emptyBoard = [
        [{"id":"A1","column":0,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A2","column":1,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A3","column":2,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A4","column":3,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A5","column":4,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A6","column":5,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A7","column":6,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A8","column":7,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A9","column":8,"row":0,"color":"white","selected":false,"shipId":null},{"id":"A10","column":9,"row":0,"color":"white","selected":false,"shipId":null}],
        [{"id":"B1","column":0,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B2","column":1,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B3","column":2,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B4","column":3,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B5","column":4,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B6","column":5,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B7","column":6,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B8","column":7,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B9","column":8,"row":1,"color":"white","selected":false,"shipId":null},{"id":"B10","column":9,"row":1,"color":"white","selected":false,"shipId":null}],
        [{"id":"C1","column":0,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C2","column":1,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C3","column":2,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C4","column":3,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C5","column":4,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C6","column":5,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C7","column":6,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C8","column":7,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C9","column":8,"row":2,"color":"white","selected":false,"shipId":null},{"id":"C10","column":9,"row":2,"color":"white","selected":false,"shipId":null}],
        [{"id":"D1","column":0,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D2","column":1,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D3","column":2,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D4","column":3,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D5","column":4,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D6","column":5,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D7","column":6,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D8","column":7,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D9","column":8,"row":3,"color":"white","selected":false,"shipId":null},{"id":"D10","column":9,"row":3,"color":"white","selected":false,"shipId":null}],
        [{"id":"E1","column":0,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E2","column":1,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E3","column":2,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E4","column":3,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E5","column":4,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E6","column":5,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E7","column":6,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E8","column":7,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E9","column":8,"row":4,"color":"white","selected":false,"shipId":null},{"id":"E10","column":9,"row":4,"color":"white","selected":false,"shipId":null}],
        [{"id":"F1","column":0,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F2","column":1,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F3","column":2,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F4","column":3,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F5","column":4,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F6","column":5,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F7","column":6,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F8","column":7,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F9","column":8,"row":5,"color":"white","selected":false,"shipId":null},{"id":"F10","column":9,"row":5,"color":"white","selected":false,"shipId":null}],
        [{"id":"G1","column":0,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G2","column":1,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G3","column":2,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G4","column":3,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G5","column":4,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G6","column":5,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G7","column":6,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G8","column":7,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G9","column":8,"row":6,"color":"white","selected":false,"shipId":null},{"id":"G10","column":9,"row":6,"color":"white","selected":false,"shipId":null}],
        [{"id":"H1","column":0,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H2","column":1,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H3","column":2,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H4","column":3,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H5","column":4,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H6","column":5,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H7","column":6,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H8","column":7,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H9","column":8,"row":7,"color":"white","selected":false,"shipId":null},{"id":"H10","column":9,"row":7,"color":"white","selected":false,"shipId":null}],
        [{"id":"I1","column":0,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I2","column":1,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I3","column":2,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I4","column":3,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I5","column":4,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I6","column":5,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I7","column":6,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I8","column":7,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I9","column":8,"row":8,"color":"white","selected":false,"shipId":null},{"id":"I10","column":9,"row":8,"color":"white","selected":false,"shipId":null}],
        [{"id":"J1","column":0,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J2","column":1,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J3","column":2,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J4","column":3,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J5","column":4,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J6","column":5,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J7","column":6,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J8","column":7,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J9","column":8,"row":9,"color":"white","selected":false,"shipId":null},{"id":"J10","column":9,"row":9,"color":"white","selected":false,"shipId":null}]
    ];

    it('should render properly when data is empty', () => {
        const tree = renderer.create(<Board data={[]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should a empty table when data is empty', () => {
        const wrapper = shallow(<Board data={[]}/>);
        expect(wrapper.find('table').props().children.props.children).toHaveLength(0);
        expect(wrapper.find('Cell').exists()).toBe(false);
    });

    it('should render properly when data is not empty', () => {
        const tree = renderer.create(<Board data={emptyBoard}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should a board with 100 cells when data is not empty', () => {
        const wrapper = shallow(<Board data={emptyBoard}/>);
        expect(wrapper.find('table').props().children.props.children).not.toHaveLength(0);
        expect(wrapper.find('Cell').exists()).toBe(true);
        expect(wrapper.find('Cell')).toHaveLength(100);
    });

    it("when dont set handleCellClick, it is the default prop", () => {
        const wrapper = mount(<Board data={emptyBoard}/>);
        expect(wrapper.props().handleCellClick).toBe(Board.defaultProps.handleCellClick);
        expect(wrapper.props().handleCellClick()).toBe(undefined);
    });
    
    it("when dont set handleOnDragStart, it is the default prop", () => {
        const wrapper = mount(<Board data={emptyBoard}/>);
        expect(wrapper.props().handleOnDragStart).toBe(Board.defaultProps.handleOnDragStart);
        expect(wrapper.props().handleOnDragStart()).toBe(undefined);
    });

    it("when dont set handleOnDragEnter, it is the default prop", () => {
        const wrapper = mount(<Board data={emptyBoard}/>);
        expect(wrapper.props().handleOnDragEnter).toBe(Board.defaultProps.handleOnDragEnter);
        expect(wrapper.props().handleOnDragEnter()).toBe(undefined);
    });
    
    it("when dont set handleOnDragEnd, it is the default prop", () => {
        const wrapper = mount(<Board data={emptyBoard}/>);
        expect(wrapper.props().handleOnDragEnd).toBe(Board.defaultProps.handleOnDragEnd);
        expect(wrapper.props().handleOnDragEnd()).toBe(undefined);
    });

    it("should handleOnDragEnter return all cells clicked", () => {
        const wrapper = mount(<Board data={emptyBoard} handleBoardClick={(e) => {return e}}/>);
        for (let i = 0; i < 10; i += 1) {
            const row = Math.floor(Math.random() * 10);
            const column = Math.floor(Math.random() * 10);
            const cell = wrapper.find('Cell').at(row * 10 + column).simulate('click');
            expect(cell.props().row).toEqual(row);
            expect(cell.props().column).toEqual(column);
        }
    });

    it("should handleOnDragEnter return all cells where start draging", () => {
        const wrapper = mount(<Board data={emptyBoard} handleOnDragStart={(e) => {return e}}/>);
        for (let i = 0; i < 10; i += 1) {
            const row = Math.floor(Math.random() * 10);
            const column = Math.floor(Math.random() * 10);
            const cell = wrapper.find('Cell').at(row * 10 + column).simulate('dragStart');
            expect(cell.props().row).toEqual(row);
            expect(cell.props().column).toEqual(column);
        }
    });

    it("should handleOnDragEnter return all cells entered", () => {
        const wrapper = mount(<Board data={emptyBoard} handleOnDragEnter={(e) => {return e}}/>);
        for (let i = 0; i < 10; i += 1) {
            const row = Math.floor(Math.random() * 10);
            const column = Math.floor(Math.random() * 10);
            const cell = wrapper.find('Cell').at(row * 10 + column).simulate('dragEnter');
            expect(cell.props().row).toEqual(row);
            expect(cell.props().column).toEqual(column);
        }
    });

    it("when set handleOnDragEnd, it has to do this", () => {
        const wrapper = mount(<Board data={emptyBoard} handleOnDragEnd={() => a += 1}/>);
        let a = 0
        for (let i = 0; i < 10; i += 1) {
            const row = Math.floor(Math.random() * 10);
            const column = Math.floor(Math.random() * 10);
            wrapper.find('Cell').at(row * 10 + column).simulate('dragEnd');
        }
        expect(a).toBe(10);
    });
})