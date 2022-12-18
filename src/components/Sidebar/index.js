import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setSidebarState } from '../../store/actions';

function Sidebar() {
  const { dispatch } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.content_bg}>
        <div className={styles.content}>
          <div>黃宥穎</div>

          <div className={styles.nav}>
            <div
              className={styles.nav_item}
              onClick={() => setSidebarState(dispatch, { sidebarState: false })}
            >
              <div>About</div>
            </div>
            <div
              className={styles.nav_item}
              onClick={() => setSidebarState(dispatch, { sidebarState: false })}
            >
              <div>Protfolio</div>
            </div>
            <div
              className={styles.nav_item}
              onClick={() => setSidebarState(dispatch, { sidebarState: false })}
            >
              <div>Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
