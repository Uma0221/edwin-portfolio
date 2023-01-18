import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';
import queryString from 'query-string';

import { StoreContext } from '../../store/reducer';
import {
  setSidebarState,
  setPortfolioNavState,
  setWorkState,
} from '../../store/actions';

import worksJson from '../../asset/json/works.json';

import InfoBox from '../../components/WorkInfoBox';
import ImageBox from '../../components/WorkImageBox';
import Sidebar from '../../components/WorkSidebar';

function WorkPage() {
  const {
    state: { sidebarState, portfolioNavState, workState },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    setSidebarState(dispatch, { sidebarState: false });

    worksJson.map((work, index) => {
      if (
        work.collection ==
        decodeURI(location.pathname.substring(11, location.pathname.length))
      ) {
        setPortfolioNavState(dispatch, {
          portfolioNavState: index,
        });
      }
    });

    setWorkState(dispatch, {
      workState: parseInt(queryString.parse(location.search).index),
    });
  }, [location.href]);

  useEffect(() => {}, [sidebarState, portfolioNavState, workState]);

  return (
    <div className={styles.container}>
      {portfolioNavState > -1 && workState > -1 ? (
        <>
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

          <div className={styles.top}></div>
          <div className={styles.top2}></div>

          <div className={styles.content}>
            <div className={styles.bg}>
              <div className={styles.bgImg}></div>
            </div>
            <div className={styles.InfoBox}>
              <InfoBox />
            </div>

            <div className={styles.ImageBox}>
              <ImageBox />
            </div>
          </div>

          <div className={styles.bottom2}></div>
          <div className={styles.bottom}></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WorkPage;
