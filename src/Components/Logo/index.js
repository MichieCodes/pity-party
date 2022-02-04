import React from 'react';

import styles from './Logo.module.scss';
import logo from '../../Assets/logo.png';

function Logo({size = "22vw", margin = "2.35rem"}) {
  return (
    <img style={{width: size, margin}} src={logo} className={styles.logo} alt="PityPardy Logo"/>
  );
}

export default Logo;