import React from 'react';
import PropTypes from "prop-types";

import { useFetch } from '../hooks/useFetch';
import { Item } from './Item';

export const GridItems = ({ item }) => {
  const { data: itemsFromApi } = useFetch(item);
  return (
    <div className="card-grid">
      {itemsFromApi.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </div>
  );
};

GridItems.protoTypes = {
  item: PropTypes.string.isRequired,
};
