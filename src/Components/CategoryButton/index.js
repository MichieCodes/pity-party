import React from 'react';

import ClueCard from '../ClueCard';

import styles from './CategoryButton.module.scss';

function CategoryButton({card}) {
  const [enabled, setEnabled] = React.useState(true);
  const [showClue, setShowClue] = React.useState(false);

  return (
    <>
      <button 
        className={`category-card ${styles['category-button']}`}
        disabled={!enabled} 
        onClick={() => {setEnabled(false); setShowClue(true)}}>
        {enabled ? `$${card?.value}` : ""}
      </button>

      {showClue && <ClueCard card={card} close={() => setShowClue(false)}/>}
    </>
  );
}

export default CategoryButton;
