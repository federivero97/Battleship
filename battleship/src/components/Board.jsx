import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Board = (props) => {
  const { data, handleCellClick } = props;
  const columns = [];

  data.forEach((column, i) => {
    const cells = [];

    column.forEach((row) => {
      cells.push(
        <Cell
          key={row.id + (i + 1).toString()}
          id={row.id + (i + 1).toString()}
          column={row.id}
          row={i + 1}
          color={row.color}
          available={row.available}
          selected={row.selected}
          shipId={row.shipId}
          handleCellClick={(e) => {
            return handleCellClick(e);
          }}
        />
      );
    });

    columns.push(<tr key={i.toString()}>{cells}</tr>);
  });

  return (
    <table className="table">
      <tbody>{columns}</tbody>
    </table>
  );
};

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleCellClick: PropTypes.func.isRequired
};

export default Board;
