import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setSidebarState } from '../../store/actions';

function Portfolio() {
  const { dispatch } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div onClick={() => setSidebarState(dispatch, { sidebarState: false })}>
          MOTION GRAPHICS
        </div>
        <div onClick={() => setSidebarState(dispatch, { sidebarState: false })}>
          UI/UX
        </div>
        <div onClick={() => setSidebarState(dispatch, { sidebarState: false })}>
          VISUAL DESIGN
        </div>
        <div onClick={() => setSidebarState(dispatch, { sidebarState: false })}>
          GAME ART
        </div>
        <div onClick={() => setSidebarState(dispatch, { sidebarState: false })}>
          SKETCH
        </div>
        <div onClick={() => setSidebarState(dispatch, { sidebarState: false })}>
          3D MODLING
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
