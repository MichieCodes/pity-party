import React from 'react';
import { UseClueDataContext } from '../../Context/ClueContext';

import CategoryColumn from '../CategoryColumn';

import styles from './Board.module.scss';

function Board() {
  const Clues = UseClueDataContext();

  return (
    <div className={styles.board}>
      {Clues.map((category, c) => 
        <CategoryColumn key={c} category={category}/>
      )}
    </div>
  );
}

export default Board;
