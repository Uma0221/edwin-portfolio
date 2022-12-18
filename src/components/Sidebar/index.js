import React from 'react';
import styles from './styles.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.content_bg}>
        <div className={styles.content}>
          <div>黃宥穎</div>

          <div className={styles.nav}>
            <div className={styles.nav_item}>
              <div>About</div>
            </div>
            <div className={styles.nav_item}>
              <div>Protfolio</div>
            </div>
            <div className={styles.nav_item}>
              <div>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
