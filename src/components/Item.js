import React from 'react';
import PropTypes from 'prop-types';

export const Item = ({ title, url }) => {
  return (
    <div className="card">
      <a href={url} target="_blank">
        {title}
      </a>
    </div>
  );
};

Item.prototype = {
  issue: PropTypes.string.isRequired,
};
