import React from 'react';
import FetchClues from '../../Utils/FetchClues'
import { UseClueFunctionContext } from '../../Context/ClueContext';

import Spinner from '../../Components/Spinner';

import styles from './FetchScreen.module.scss';

function FetchScreen({next}) {
  const Overlay = React.useRef(null);
  const setClues = UseClueFunctionContext();

  const getClues = React.useCallback(async () => {
    setClues('SET_CLUES', await FetchClues());
    next();
  }, [next, setClues]);

  React.useEffect(() => {
    getClues();
  }, [getClues]);
  
  return (
    <>
      <div ref={Overlay} className={`overlay ${styles.overlay}`}></div>
      <div className={styles['fetch-screen']}>
        <h1>Fetching Clues</h1>
        <Spinner loading={true} closeCallback={() => console.log("Hello")}/>
        <h1>Please StandBy</h1>
      </div>
    </>
  );
}

export default FetchScreen;
