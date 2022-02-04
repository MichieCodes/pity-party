import React from 'react';
import Speaker from '../../Utils/Speaker';

import styles from './LargeCategoryCard.module.scss';

function LargeCategoryCard({title, onAnimationEnd}) {
  const animationEnd = React.useCallback((e) => {
    if(e.animationName.includes('scale-in-slide-out') && onAnimationEnd)
      setTimeout(() => onAnimationEnd(), 500);
  }, [onAnimationEnd]);

  React.useEffect(() => {
    Speaker(title);
  }, [title]);

  return (
    <div className={`category-card ${styles['large-category-card']}`} onAnimationEnd={animationEnd}>
      {title}
    </div>
  );
}

export default LargeCategoryCard;
