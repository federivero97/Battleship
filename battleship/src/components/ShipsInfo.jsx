import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const ShipsInfo = (props) => {
  const { ships } = props;
  const typeShips = [
    {
      name: 'carriers',
      length: 4,
      amount: 1
    },
    {
      name: 'cruisers',
      length: 3,
      amount: 3
    },
    {
      name: 'submarine',
      length: 2,
      amount: 1
    }
  ];

  return (
    <div className="ships-info">
      <table>
        <tbody>
          <div className="ships">
            {typeShips.map((type) => {
              return (
                <tr>
                  <div
                    className="info"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center'
                    }}
                  >
                    <Ship length={type.length} />
                    <div className="ship-length">
                      (
                      {
                        ships.filter((s) => {
                          return s.length === type.length;
                        }).length
                      }
                      /{type.amount})
                    </div>
                  </div>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
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
      cells.push(<Cell color="grey" />);
    }
    return cells;
  };

  return <div className="ship"> {renderCells()} </div>;
};

Ship.propTypes = {
  length: PropTypes.number.isRequired
};

export default ShipsInfo;
