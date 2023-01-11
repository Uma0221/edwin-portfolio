import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setSidebarState } from '../../store/actions';

import InfoBox from '../../components/WorkInfoBox';
import Sidebar from '../../components/WorkSidebar';

function WorkPage() {
  const {
    state: { sidebarState },
    dispatch,
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <button
        className={
          sidebarState
            ? `${styles.sidebar_button} ${styles.cross}`
            : `${styles.sidebar_button} ${styles.arrow}`
        }
        onClick={() =>
          setSidebarState(dispatch, { sidebarState: !sidebarState })
        }
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
      <div
        className={
          sidebarState
            ? `${styles.sidebar} ${styles.sidebar_open}`
            : `${styles.sidebar} ${styles.sidebar_close}`
        }
      >
        <Sidebar />
      </div>

      <div className={styles.InfoBox}>
        <InfoBox />
      </div>
    </div>
  );
}

export default WorkPage;
