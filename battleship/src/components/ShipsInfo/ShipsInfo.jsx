import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell';

const ShipsInfo = (props) => {
  const { ships } = props;
  const typeShips = [
    {
      name: 'Carriers',
      length: 4,
      amount: 1
    },
    {
      name: 'Cruisers',
      length: 3,
      amount: 3
    },
    {
      name: 'Submarines',
      length: 2,
      amount: 1
    }
  ];

  return (
    <div className="ships-info">
      {typeShips.map((type) => {
        return (
          <div key={type.name} className="ship-info">
            <div className="info">
              {type.name} (
              {
                ships.filter((s) => {
                  return s.length === type.length;
                }).length
              }
              /{type.amount}) :
            </div>
            <table className="ship">
              <tbody>
                <tr>
                  <Ship length={type.length} />
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

ShipsInfo.propTypes = {
  ships: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Ship = (props) => {
  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < props.length; i += 1) {
      cells.push(<Cell key={i} color="grey" />);
    }
    return cells;
  };

  return renderCells();
};

Ship.propTypes = {
  length: PropTypes.number.isRequired
};

export default ShipsInfo;
