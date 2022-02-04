import React from 'react';
import { UseScoreFunctionContext } from '../../Context/ScoreContext';

import Button from '../Button';

import styles from './GameOverCard.module.scss';

function GameOverCard({score, next}) {
  const setScore = UseScoreFunctionContext();
  return (
    <div className={`overlay ${styles['overlay']}`}>
      <div className={`category-card ${styles['game-over']}`}>
        <h1>Game Over!</h1>
        <span>Score: <span>{score < 0 ? '-' : ''}${Math.abs(score)}</span></span>
        <Button onClick={() => {setScore('RESET_SCORE'); next()}}>Play Again</Button>
      </div>
    </div>
  );
}

export default GameOverCard;
