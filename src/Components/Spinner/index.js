import React from 'react';

import styles from './Spinner.module.scss';

function Spinner({loading, closeCallback}) {
  React.useEffect(() => {
    if(!closeCallback) return; 

    if(loading === false) closeCallback();
      // AnimateModal(Overlay.current, () => closeCallback(), 'OverlayFadeOut');
  }, [loading, closeCallback]);

  return (
    <svg className={styles.spinner} width={"15rem"} viewBox="0 0 50 50" fill="none">
      <defs>
        <linearGradient id="spinner-gradient" gradientTransform="rotate(280)" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"/><stop offset="100%"/>
        </linearGradient>
      </defs>
      <circle className={styles.stroke} cx="25" cy="25" r="19.5" strokeWidth={6 - 0.1}/>
      <circle className={styles.path} cx="25" cy="25" r="19.5" stroke="url(#spinner-gradient)" strokeWidth={6}/>
    </svg>
  );
}

export default Spinner;
