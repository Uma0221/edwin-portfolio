import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import {
  setSidebarNavClick,
  setSidebarNavState,
  setSidebarState,
} from '../../store/actions';

function HomeSidebar() {
  const items = ['About', 'Portfolio', 'Contact'];

  const {
    state: { sidebarNavState },
    dispatch,
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.personal}>
          <div className={styles.personalImg}></div>
        </div>

        <div className={styles.nav}>
          {items.map((item, index) => (
            <Link
              to={index ? `/${item}` : '/'}
              key={`sidebarNavItem_${index}`}
              className={
                sidebarNavState == index
                  ? `${styles.nav_item} ${styles.select}`
                  : `${styles.nav_item}`
              }
              onClick={() => {
                setSidebarNavClick(dispatch, { sidebarNavClick: true });
                setSidebarNavState(dispatch, { sidebarNavState: index });
                setSidebarState(dispatch, { sidebarState: false });
              }}
            >
              <div>{item}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSidebar;
