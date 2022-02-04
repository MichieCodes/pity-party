import React from 'react';
import Speaker from '../../Utils/Speaker';
import { UseClueDataContext } from '../../Context/ClueContext';

import LargeCategoryCard from '../../Components/LargeCategoryCard';
import Logo from '../../Components/Logo';

import styles from './CategoryScreen.module.scss';

const categoryList = [
  "Self Portrait of the Artist", "-Ologies", 
  "Visiting Italy", "Whose Songs?",
  "Quotations By the Number", "The Silent Letter In..."
]

function CategoryScreen({next}) {
  const [index, setIndex] = React.useState(-1);
  const Clues = UseClueDataContext();

  const updateIndex = React.useCallback(() => setIndex((lastIndex) => 
    lastIndex + 1
  ), [setIndex]);

  const welcomeUser = React.useCallback(() => 
    Speaker("Welcome to PityPardy! The Categories for this Round are...", updateIndex)
  , [updateIndex]);

  return (
    <div className={styles['category-screen']}>
      <Logo/>

      {
        index < 0 ? 
          <button onClick={welcomeUser}>Play &gt;</button>
          :
          <>
            <LargeCategoryCard 
              key={index} 
              title={Clues[index].title} 
              onAnimationEnd={index < categoryList.length - 1 ? updateIndex : next}/>

            <button onClick={next}>Skip &gt;&gt;</button>
          </>
      }
    </div>
  );
}

export default CategoryScreen;
