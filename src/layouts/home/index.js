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

  const [bgWidth, setbgWidth] = useState(0);
  const [scrollY, setscrollY] = useState(0);
  const [protfolioHeight, setprotfolioHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setbgWidth(
      ((window.innerHeight * 0.85) / img.height) * img.width -
        window.innerWidth +
        window.innerHeight * 0.85,
    );
    setprotfolioHeight(ref.current.clientHeight);

    const handleScroll = () => {
      setscrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {}, [bgWidth, scrollY, sidebarState]);

  return (
    <div
      className={styles.container}
      style={{ height: `${bgWidth + protfolioHeight}px` }}
    >
      <button
        className={styles.sidebar_button}
        onClick={() =>
          setSidebarState(dispatch, { sidebarState: !sidebarState })
        }
      ></button>
      <div
        className={
          sidebarState
            ? `${styles.sidebar} ${styles.sidebar_open}`
            : `${styles.sidebar} ${styles.sidebar_close}`
        }
      >
        <Sidebar />
      </div>
      {scrollY < bgWidth - window.innerHeight * 0.85 ? (
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
              top: `${bgWidth - window.innerHeight * 0.85}px`,
              backgroundPositionX: `${-bgWidth + window.innerHeight * 0.85}px`,
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
  );
}

export default Router;
