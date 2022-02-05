import React from 'react';

import logo from '../../Assets/logo.png';
import styles from './Logo.module.scss';

function Logo({size = "22vw", margin = "2.35rem"}) {
  return (
    <img style={{width: size, margin}} src={logo} className={styles.logo} alt="PityPardy Logo"/>
  );
}

export default Logo;
