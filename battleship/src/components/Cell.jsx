import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => {
  const {
    color,
    handleCellClick,
    handleOnDragStart,
    handleOnDragEnter,
    handleOnDragEnd
  } = props;

  return (
    <td
      className="cell"
      role="presentation"
      style={{ backgroundColor: color }}
      onClick={() => {
        return handleCellClick(props);
      }}
      draggable
      onDragStart={() => {
        handleOnDragStart(props);
      }}
      onDragEnter={() => {
        handleOnDragEnter(props);
      }}
      onDragEnd={() => {
        handleOnDragEnd();
      }}
    />
  );
};

Cell.defaultProps = {
  handleCellClick: () => {},
  handleOnDragStart: () => {},
  handleOnDragEnter: () => {},
  handleOnDragEnd: () => {}
};

Cell.propTypes = {
  color: PropTypes.string.isRequired,
  handleCellClick: PropTypes.func,
  handleOnDragStart: PropTypes.func,
  handleOnDragEnter: PropTypes.func,
  handleOnDragEnd: PropTypes.func
};

export default Cell;
