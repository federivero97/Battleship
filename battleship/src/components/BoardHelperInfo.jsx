import React from 'react';

const BoardHelperInfo = () => {
  return (
    <div className="helper_board_info">
      <div className="text">
        <p>
          * To draw a ship, click on a cell and drag the desired number of
          cells.
        </p>
        <p> * If you want to delete an existing ship, click on it.</p>
      </div>
    </div>
  );
};

export default BoardHelperInfo;
