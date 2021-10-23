import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => {
  const { color, handleCellClick } = props;

  return (
    <td
      className="cell"
      role="presentation"
      onClick={() => {
        return handleCellClick(props);
      }}
      style={{ backgroundColor: color }}
    />
  );
};

Cell.propTypes = {
  color: PropTypes.string.isRequired,
  handleCellClick: PropTypes.func.isRequired
};

export default Cell;
