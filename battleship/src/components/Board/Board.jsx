import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';

const Board = (props) => {
  const {
    data,
    handleCellClick,
    handleOnDragStart,
    handleOnDragEnter,
    handleOnDragEnd
  } = props;

  return (
    <table className="table">
      <tbody>
        {data.map((row) => {
          return (
            <tr key={row[0].row}>
              {row.map((column) => {
                return (
                  <Cell
                    key={column.id}
                    id={column.id}
                    row={column.row}
                    column={column.column}
                    color={column.color}
                    borderColor={column.borderColor}
                    selected={column.selected}
                    shipId={column.shipId}
                    handleCellClick={(e) => {
                      return handleCellClick(e);
                    }}
                    handleOnDragStart={(e) => {
                      return handleOnDragStart(e);
                    }}
                    handleOnDragEnter={(e) => {
                      return handleOnDragEnter(e);
                    }}
                    handleOnDragEnd={() => {
                      return handleOnDragEnd();
                    }}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Board.defaultProps = {
  data: [],
  handleCellClick: () => {},
  handleOnDragStart: () => {},
  handleOnDragEnter: () => {},
  handleOnDragEnd: () => {}
};

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
  handleCellClick: PropTypes.func,
  handleOnDragStart: PropTypes.func,
  handleOnDragEnter: PropTypes.func,
  handleOnDragEnd: PropTypes.func
};

export default Board;
