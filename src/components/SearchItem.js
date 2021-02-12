import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchItem = ({ setItemToSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setItemToSearch((items) => [inputValue, ...items]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange}/>
    </form>
  );
};

SearchItem.propTypes = {
  setItemToSearch: PropTypes.func.isRequired,
};
