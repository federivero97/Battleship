import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => {
  const {
    color,
    borderColor,
    handleCellClick,
    handleOnDragStart,
    handleOnDragEnter,
    handleOnDragEnd
  } = props;

  return (
    <td
      className="cell"
      role="presentation"
      style={{ backgroundColor: color, borderColor }}
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
  borderColor: 'grey',
  handleCellClick: () => {},
  handleOnDragStart: () => {},
  handleOnDragEnter: () => {},
  handleOnDragEnd: () => {}
};

Cell.propTypes = {
  color: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  handleCellClick: PropTypes.func,
  handleOnDragStart: PropTypes.func,
  handleOnDragEnter: PropTypes.func,
  handleOnDragEnd: PropTypes.func
};

export default Cell;
