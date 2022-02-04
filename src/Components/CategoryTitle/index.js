import React from 'react';

import styles from './CategoryTitle.module.scss';

function CategoryTitle({category}) {
  return (
    <div className={`category-card ${styles['category-title']}`}>
      {category}
    </div>
  );
}

export default CategoryTitle;
