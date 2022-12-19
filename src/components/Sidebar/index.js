import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setSidebarNavState, setSidebarState } from '../../store/actions';

function Sidebar() {
  const items = ['About', 'Portfolio', 'Contact'];

  const {
    state: { sidebarNavState },
    dispatch,
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.name}></div>

        <div className={styles.nav}>
          {items.map((item, index) => (
            <div
              key={item}
              className={
                sidebarNavState == index
                  ? `${styles.nav_item} ${styles.select}`
                  : `${styles.nav_item}`
              }
              onClick={() => {
                setSidebarNavState(dispatch, { sidebarNavState: index });
                setSidebarState(dispatch, { sidebarState: false });
              }}
            >
              <div>{item}</div>
            </div>
          ))}

          {/* <div
            className={styles.nav_item}
            onClick={() => setSidebarState(dispatch, { sidebarState: false })}
          >
            <div>About</div>
          </div>
          <div
            className={styles.nav_item}
            onClick={() => setSidebarState(dispatch, { sidebarState: false })}
          >
            <div>Portfolio</div>
          </div>
          <div
            className={styles.nav_item}
            onClick={() => setSidebarState(dispatch, { sidebarState: false })}
          >
            <div>Contact</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
