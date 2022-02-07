import React from 'react';
import CategoryButton from '../CategoryButton';
import CategoryTitle from '../CategoryTitle';

import styles from './CategoryColumn.module.scss';

function CategoryColumn({category}) {
  return (
    <div className={styles['category-column']}>
      <CategoryTitle category={category.title}/>
      {
        category.clues.map((c, i) => 
          <CategoryButton key={i} card={c}/>
        )
      }
    </div>
  );
}

export default CategoryColumn;
