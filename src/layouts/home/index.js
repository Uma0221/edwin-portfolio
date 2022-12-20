import React, { useState, useEffect, useRef, useContext } from 'react';

import { StoreContext } from '../../store/reducer';
import { setSidebarState } from '../../store/actions';

import styles from './styles.module.scss';

import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Sidebar from '../../components/Sidebar';

import painterGIF from '../../asset/imgs/painter.gif';
import lightGIF from '../../asset/imgs/light.gif';
import rockyManGIF from '../../asset/imgs/rockyMan.gif';

function Router() {
  const imgWidth = 5481;
  const imgHeight = 740;

  const {
    state: { sidebarState },
    dispatch,
  } = useContext(StoreContext);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [bgWidth, setBgWidth] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const ref = useRef(null);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  let handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  useEffect(() => {
    setBgWidth(
      ((windowHeight * 0.85) / imgHeight) * imgWidth -
        windowWidth +
        windowHeight * 0.85,
    );
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    if (bgWidth > 0) {
      setContentHeight(ref.current.clientHeight);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [bgWidth]);

  useEffect(() => {}, [scrollY, sidebarState]);

  return (
    <>
      {bgWidth > 0 ? (
        <div
          className={styles.container}
          style={{ height: `${bgWidth + contentHeight}px` }}
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
              >
                <img
                  className={styles.gif_painter}
                  style={{
                    left: `${-windowHeight * 0.15 - scrollY}px`,
                  }}
                  src={painterGIF}
                ></img>
                <img
                  className={styles.gif_light}
                  style={{
                    left: `${windowHeight * 1.48 - scrollY}px`,
                  }}
                  src={lightGIF}
                ></img>
                <img
                  className={styles.gif_rockyMan}
                  style={{
                    left: `${windowHeight * 1.14 - scrollY}px`,
                  }}
                  src={rockyManGIF}
                ></img>
              </div>
              <div
                ref={ref}
                className={styles.content}
                style={{ position: 'fixed', top: '85vh' }}
              >
                <Portfolio />
                <Contact />
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
                className={styles.content}
                style={{ position: 'absolute', top: bgWidth }}
              >
                <Portfolio />
                <Contact />
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
