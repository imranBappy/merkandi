import React from 'react';

const Currency = ({ selectedCurrency, onSelectCurrency, currencies }) => {
  return (
    <div>
      <label>Select Currency:</label>
      <select value={selectedCurrency} onChange={onSelectCurrency}>
        {Object.keys(currencies).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;