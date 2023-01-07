import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { StoreContext } from '../../store/reducer';
import {
  setSidebarState,
  setSidebarNavClick,
  setSidebarNavState,
} from '../../store/actions';

import styles from './styles.module.scss';

import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Sidebar from '../../components/HomeSidebar';
import Intro from '../../components/Intro';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';

import IntroPNG from '../../asset/imgs/banner/BTitle_INTRO.png';
import ExpPNG from '../../asset/imgs/banner/BTitle_EXP.png';

import painterGIF from '../../asset/imgs/banner/painter.gif';
import lightGIF from '../../asset/imgs/banner/light.gif';
import rockyManGIF from '../../asset/imgs/banner/rockyMan.gif';

function HomePage() {
  const imgWidth = 5481;
  const imgHeight = 740;
  const navigate = useNavigate();

  const {
    state: { sidebarState, sidebarNavClick, sidebarNavState },
    dispatch,
  } = useContext(StoreContext);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [bgWidth, setBgWidth] = useState(0);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [portfolioHeight, setPortfolioHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);
  const [currentNavState, setCurrentNavState] = useState(0);

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
      setPortfolioHeight(portfolioRef.current.clientHeight);
      setContactHeight(contactRef.current.clientHeight);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [bgWidth]);

  useEffect(() => {
    if (portfolioHeight > 0) {
      if (window.location.pathname == '/Portfolio') {
        window.scrollTo(0, bgWidth);
        setSidebarNavState(dispatch, { sidebarNavState: 1 });
      } else if (window.location.pathname == '/Contact') {
        window.scrollTo(0, bgWidth + portfolioHeight);
        setSidebarNavState(dispatch, { sidebarNavState: 2 });
      }
    }
  }, [portfolioHeight]);

  useEffect(() => {
    if (bgWidth > 0) {
      if (portfolioHeight - windowHeight < 0) {
        if (scrollY < bgWidth - windowHeight * 0.85 && currentNavState != 0) {
          navigate('/');
          setCurrentNavState(0);
        } else if (
          scrollY >= bgWidth - windowHeight * 0.85 &&
          scrollY <= bgWidth &&
          currentNavState != 1
        ) {
          navigate('/Portfolio');
          setCurrentNavState(1);
        } else if (scrollY > bgWidth && currentNavState != 2) {
          navigate('/Contact');
          setCurrentNavState(2);
        }
      } else {
        if (scrollY < bgWidth - windowHeight * 0.85 && currentNavState != 0) {
          navigate('/');
          setCurrentNavState(0);
        } else if (
          scrollY >= bgWidth - windowHeight * 0.85 &&
          scrollY <= bgWidth + portfolioHeight - windowHeight &&
          currentNavState != 1
        ) {
          navigate('/Portfolio');
          setCurrentNavState(1);
        } else if (
          scrollY > bgWidth + portfolioHeight - windowHeight &&
          currentNavState != 2
        ) {
          navigate('/Contact');
          setCurrentNavState(2);
        }
      }
    }
  }, [scrollY]);

  useEffect(() => {
    if (sidebarNavClick) {
      if (sidebarNavState == 0) {
        scroll.scrollToTop();
      } else if (sidebarNavState == 1) {
        scroll.scrollTo(bgWidth);
      } else if (sidebarNavState == 2) {
        scroll.scrollTo(bgWidth + portfolioHeight);
      }
      setSidebarNavClick(dispatch, { sidebarNavClick: false });
    }
  }, [sidebarNavClick]);

  useEffect(() => {
    if (sidebarNavState != currentNavState) {
      setSidebarNavState(dispatch, { sidebarNavState: currentNavState });
    }
  }, [currentNavState]);

  useEffect(() => {}, [contactHeight, sidebarNavState, sidebarState]);

  return (
    <>
      {bgWidth > 0 ? (
        <div
          className={styles.container}
          style={{ height: `${bgWidth + portfolioHeight + contactHeight}px` }}
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
          <div
            className={styles.banner}
            style={
              scrollY < bgWidth - windowHeight * 0.85
                ? {
                    position: 'fixed',
                    backgroundPositionX: `${-scrollY}px`,
                  }
                : {
                    position: 'absolute',
                    top: `${bgWidth - windowHeight * 0.85}px`,
                    backgroundPositionX: `${-bgWidth + windowHeight * 0.85}px`,
                  }
            }
          >
            <div
              className={styles.banner_content}
              style={
                scrollY < bgWidth - windowHeight * 0.85
                  ? {
                      top: `${windowHeight * 0.2}px`,
                      left: `${windowHeight * 0.82 - scrollY}px`,
                    }
                  : {
                      top: `${bgWidth - windowHeight * 0.65 - scrollY}px`,
                      left: `${windowHeight * 1.67 - bgWidth}px`,
                    }
              }
            >
              <img className={styles.banner_content_title} src={IntroPNG}></img>
              <Intro />
            </div>
            <div
              className={styles.banner_content}
              style={
                scrollY < bgWidth - windowHeight * 0.85
                  ? {
                      top: `${windowHeight * 0.2}px`,
                      left: `${windowHeight * 2.18 - scrollY}px`,
                    }
                  : {
                      top: `${bgWidth - windowHeight * 0.65 - scrollY}px`,
                      left: `${windowHeight * 3.03 - bgWidth}px`,
                    }
              }
            >
              <img className={styles.banner_content_title} src={ExpPNG}></img>
              <Experience />
            </div>
            <div
              className={styles.skills}
              style={
                scrollY < bgWidth - windowHeight * 0.85
                  ? {
                      top: `${windowHeight * 0.1}px`,
                      left: `${windowHeight * 4.42 - scrollY}px`,
                    }
                  : {
                      top: `${bgWidth - windowHeight * 0.75 - scrollY}px`,
                      left: `${windowHeight * 5.27 - bgWidth}px`,
                    }
              }
            >
              <Skills />
            </div>

            <img
              className={styles.gif_painter}
              style={
                scrollY < bgWidth - windowHeight * 0.85
                  ? {
                      top: `${windowHeight * 0.06}px`,
                      left: `${-windowHeight * 0.15 - scrollY}px`,
                    }
                  : {
                      top: `${bgWidth - windowHeight * 0.79 - scrollY}px`,
                      left: `${windowHeight * 0.7 - bgWidth}px`,
                    }
              }
              src={painterGIF}
            ></img>
            <img
              className={styles.gif_light}
              style={
                scrollY < bgWidth - windowHeight * 0.85
                  ? {
                      top: `${-windowHeight * 0.06}px`,
                      left: `${windowHeight * 1.62 - scrollY}px`,
                    }
                  : {
                      top: `${bgWidth - windowHeight * 0.91 - scrollY}px`,
                      left: `${windowHeight * 2.47 - bgWidth}px`,
                    }
              }
              src={lightGIF}
            ></img>
            <img
              className={styles.gif_rockyMan}
              style={
                scrollY < bgWidth - windowHeight * 0.85
                  ? {
                      top: `${windowHeight * 0.14}px`,
                      left: `${windowHeight * 1.28 - scrollY}px`,
                    }
                  : {
                      top: `${bgWidth - windowHeight * 0.71 - scrollY}px`,
                      left: `${windowHeight * 2.13 - bgWidth}px`,
                    }
              }
              src={rockyManGIF}
            ></img>
          </div>
          <div
            ref={portfolioRef}
            className={styles.content}
            style={
              scrollY < bgWidth - windowHeight * 0.85
                ? { position: 'fixed', top: '85vh' }
                : { position: 'absolute', top: bgWidth }
            }
          >
            <Portfolio />
          </div>
          <div
            ref={contactRef}
            className={styles.content}
            style={
              scrollY < bgWidth - windowHeight * 0.85
                ? {
                    position: 'fixed',
                    top: `${windowHeight * 0.85 + portfolioHeight}px`,
                  }
                : { position: 'absolute', top: bgWidth + portfolioHeight }
            }
          >
            <Contact />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default HomePage;
