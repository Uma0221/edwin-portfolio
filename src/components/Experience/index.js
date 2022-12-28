import React from 'react';
import styles from './styles.module.scss';

function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.window_shadow}>
        <div className={styles.window}>
          <div className={styles.titlebar}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.content}>
            <div className={styles.page}></div>

            <div className={styles.controler}>
              <button
                className={`${styles.triangle} ${styles.triangle_rotate}`}
                onClick={() => console.log('up')}
              ></button>
              <button
                className={styles.triangle}
                onClick={() => console.log('down')}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
