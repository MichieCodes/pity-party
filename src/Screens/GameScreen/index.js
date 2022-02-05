import React from 'react';
import { UseScoreDataContext } from '../../Context/ScoreContext';

import Logo from '../../Components/Logo';
import Board from '../../Components/Board';
import GameOverCard from '../../Components/GameOverCard';

import styles from './GameScreen.module.scss';

function GameScreen({next}) {
  const {Score, GameOver} = UseScoreDataContext();

  return (
    <div className={styles['game-screen']}>
      <header className={styles.header}>
        <Logo size="18.875vw" margin="0 1rem 0 0"/>
        <span>
          Score: <span className={Score < 0 ? styles.danger : ''}>{Score < 0 ? '-' : ''}${Math.abs(Score)}</span>
        </span>
      </header>

      <Board/>

      {GameOver && <GameOverCard score={Score} next={next}/>}
    </div>
  );
}

export default GameScreen;
