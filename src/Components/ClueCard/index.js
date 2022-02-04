import React from 'react';
import Speaker from '../../Utils/Speaker';
import { UseScoreFunctionContext } from '../../Context/ScoreContext';

import Button from '../Button';
import styles from './ClueCard.module.scss';

function ClueCard({card, close}) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const setScore = UseScoreFunctionContext();

  React.useEffect(() => {
    Speaker(card.question);
  }, [card]);

  return (
    <div className={`overlay ${styles['overlay']}`}>
      <div className={`category-card ${styles['clue-card']}`}>
        <span>{card.question}</span>
        {
          !showAnswer ? 
            <Button 
              onClick={() => {setShowAnswer(true); Speaker("What is " + card.answer)}}>
                Show Answer
            </Button>
          :
            <>
              <hr/>
              <span>{card.answer}</span>
              <div className={styles['button-group']}>
                <Button onClick={() => {setScore('DECREASE_SCORE', card.value); close();}}>My Answer was Incorrect</Button>
                <Button onClick={() => {setScore('INCREASE_SCORE', card.value); close();}}>My Answer was Correct</Button>
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default ClueCard;
