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
                <tr key={row.id}>
                  {row.data.map((column) => {
                    return (
                      <Cell
                        key={row.id + column.id}
                        id={row.id + column.id}
                        row={row.id}
                        column={column.id}
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCellClick: PropTypes.func.isRequired
};

export default Board;
