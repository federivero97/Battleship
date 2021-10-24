import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Board = (props) => {
  const { data, handleCellClick } = props;

  return (
    <table className="table">
      <tbody>
        {data !== []
          ? data.map((row) => {
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
                        available={column.available}
                        selected={column.selected}
                        shipId={column.shipId}
                        handleCellClick={(e) => {
                          return handleCellClick(e);
                        }}
                      />
                    );
                  })}
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleCellClick: PropTypes.func.isRequired
};

export default Board;
