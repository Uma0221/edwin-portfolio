import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import imageUrl from '../imgs/bg_banner.jpg';

function Router() {
  const img = new Image();
  img.src = imageUrl;

  const [bgWidth, setbgWidth] = useState(0);
  const [scrollY, setscrollY] = useState(0);

  useEffect(() => {
    setbgWidth(
      ((window.innerHeight * 0.85) / img.height) * img.width -
        window.innerWidth +
        window.innerHeight * 0.85,
    );

    const handleScroll = () => {
      setscrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {}, [bgWidth, scrollY]);

  return (
    <div className={styles.container} style={{ height: `${bgWidth + 500}px` }}>
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
            className={styles.protfolio}
            style={{ position: 'fixed', top: '85vh' }}
          ></div>
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
            className={styles.protfolio}
            style={{ position: 'absolute', top: bgWidth }}
          ></div>
        </>
      )}
    </div>
  );
}

export default Router;
