import React from 'react';
import styles from './styles.module.scss';

function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.content_shadow}>
        <div className={styles.content}>
          <div className={styles.titlebar}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
