import React, { useState } from 'react';
import { GridItems } from './components/GridItems';
import { SearchItem } from './components/SearchItem';
import './styles.css';

export const App = ({ defaultItems = [] }) => {
  const [items, setItems] = useState(defaultItems);
  return (
    <div className="App">
      <div>
        <h3>Search Issues</h3>
        <SearchItem setItemToSearch={setItems} />
        <ul>
          {items.map((item, i) => (
            <GridItems key={i} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
