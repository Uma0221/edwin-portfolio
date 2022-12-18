import React, { useState, useEffect, useRef, useContext } from 'react';

import { StoreContext } from '../../store/reducer';
import { setSidebarState } from '../../store/actions';

import styles from './styles.module.scss';

import Protfolio from '../../components/Protfolio';
import Sidebar from '../../components/Sidebar';

import imageUrl from '../../asset/imgs/bg_banner.jpg';

function Router() {
  const img = new Image();
  img.src = imageUrl;

  const {
    state: { sidebarState },
    dispatch,
  } = useContext(StoreContext);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setscrollY] = useState(0);

  const [bgWidth, setbgWidth] = useState(0);
  const [protfolioHeight, setprotfolioHeight] = useState(0);
  const ref = useRef(null);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  let handleScroll = () => {
    setscrollY(window.scrollY);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  useEffect(() => {
    setbgWidth(
      ((windowHeight * 0.85) / img.height) * img.width -
        windowWidth +
        windowHeight * 0.85,
    );
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    if (bgWidth > 0) {
      setprotfolioHeight(ref.current.clientHeight);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [bgWidth]);

  useEffect(() => {}, [scrollY, sidebarState]);

  return (
    <>
      {bgWidth ? (
        <div
          className={styles.container}
          style={{ height: `${bgWidth + protfolioHeight}px` }}
        >
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
          {scrollY < bgWidth - windowHeight * 0.85 ? (
            <>
              <div
                className={styles.banner}
                style={{
                  position: 'fixed',
                  backgroundPositionX: `${-scrollY}px`,
                }}
              ></div>
              <div
                ref={ref}
                className={styles.protfolio}
                style={{ position: 'fixed', top: '85vh' }}
              >
                <Protfolio />
              </div>
            </>
          ) : (
            <>
              <div
                className={styles.banner}
                style={{
                  position: 'absolute',
                  top: `${bgWidth - windowHeight * 0.85}px`,
                  backgroundPositionX: `${-bgWidth + windowHeight * 0.85}px`,
                }}
              ></div>
              <div
                ref={ref}
                className={styles.protfolio}
                style={{ position: 'absolute', top: bgWidth }}
              >
                <Protfolio />
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Router;