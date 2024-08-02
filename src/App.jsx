import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('Jam');
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClick = good => {
    setValue(good);
    setSelectedGood(prevSelectedGood =>
      prevSelectedGood === good ? null : good,
    );
  };

  return (
    <main className="section container">
      {selectedGood === null ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={`${selectedGood === good ? 'has-background-success-light' : ''}`}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button has-background-success-light is-info"
                    onClick={() => handleClick(good)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleClick(good)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
