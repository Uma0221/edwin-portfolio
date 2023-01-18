import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import {
  setPortfolioNavState,
  setSidebarState,
  setSidebarNavClick,
  setSidebarNavState,
} from '../../store/actions';

import animationData from '../../lotties/gif_MainPage_PicsLoading.json';

import worksJson from '../../asset/json/works.json';
import triangleImg from '../../asset/imgs/banner/triangle1.png';

function Portfolio() {
  const {
    state: { portfolioNavState },
    dispatch,
  } = useContext(StoreContext);

  const [visibaleWidth, setVisibaleWidth] = useState(0);
  const [maxWorks, setMaxWorks] = useState(0);
  const [pagesCount, setpagesCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [noAnimation, setNoAnimation] = useState(false);

  const [imgURLArr, setImgURLArr] = useState(null);
  const [imgLoadState, setImgLoadState] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  let resizeWindow = () => {
    setVisibaleWidth(window.innerWidth - 96);
  };

  function preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = function () {
        resolve();
      };
      img.onerror = function (err) {
        reject(err);
      };
    });
  }

  function preloadImages(arr) {
    const imagePromiseArr = arr.map(preloadImage);
    return Promise.all(imagePromiseArr);
  }

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  useEffect(() => {
    setMaxWorks(parseInt(visibaleWidth / 340));
  }, [visibaleWidth]);

  useEffect(() => {
    setImgLoadState(true);
    var imgArr = Array(worksJson[portfolioNavState].works.length).fill(0);
    worksJson[portfolioNavState].works.map(
      (work, index) => (imgArr[index] = work.imgURL),
    );

    setImgURLArr(imgArr);
  }, [portfolioNavState]);

  useEffect(() => {
    if (imgURLArr && imgURLArr[0]) {
      preloadImages(imgURLArr)
        .then(() => {
          console.log('done');
          setImgLoadState(false);
        })
        .catch(() => {
          console.log('error');
          setImgLoadState(false);
        });
    }
  }, [imgURLArr && imgURLArr[0]]);

  useEffect(() => {
    setNoAnimation(true);
    setPageIndex(0);

    if (maxWorks) {
      setpagesCount(
        parseInt((worksJson[portfolioNavState].works.length - 1) / maxWorks) +
          1,
      );
    }
  }, [portfolioNavState, maxWorks]);

  useEffect(() => {}, [pagesCount, pageIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {worksJson.map((works, index) => (
          <Link
            to="/Portfolio"
            key={`collection_${index}`}
            onClick={() => {
              setPortfolioNavState(dispatch, { portfolioNavState: index });
              setSidebarNavClick(dispatch, { sidebarNavClick: true });
              setSidebarNavState(dispatch, { sidebarNavState: 1 });
              setSidebarState(dispatch, { sidebarState: false });
            }}
          >
            <div
              className={portfolioNavState == index ? `${styles.select}` : ''}
            >
              {works.collection}
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.works}>
        <div className={styles.controller}>
          <button
            className={
              pageIndex == 0
                ? `${styles.triangle} ${styles.triangle_rotate} ${styles.notshow}`
                : `${styles.triangle} ${styles.left}`
            }
            onClick={() => {
              setNoAnimation(false);
              setPageIndex(pageIndex - 1);
            }}
          >
            <img src={triangleImg}></img>
          </button>

          <div
            className={
              pageIndex == pagesCount - 1
                ? `${styles.trans_cover} ${styles.right} ${styles.notshow}`
                : `${styles.trans_cover} ${styles.right}`
            }
          ></div>

          <button
            className={
              pageIndex == pagesCount - 1
                ? `${styles.triangle} ${styles.right} ${styles.notshow}`
                : `${styles.triangle} ${styles.right}`
            }
            onClick={() => {
              setNoAnimation(false);
              setPageIndex(pageIndex + 1);
            }}
          >
            <img src={triangleImg}></img>
          </button>
        </div>

        {worksJson[portfolioNavState].works.map((work, index) => (
          <div
            key={`work_${index}`}
            className={styles.work}
            style={{
              transform: `translateX(${-pageIndex * maxWorks * 340}px)`,
              transition: noAnimation ? 'none' : '1s ease-in-out',
            }}
          >
            <Link
              to={`/Portfolio/${worksJson[portfolioNavState].collection}?index=${index}`}
            >
              <div className={styles.work_bg}>
                {imgLoadState ? (
                  <div className={styles.imgLoadGIF}>
                    <Lottie options={defaultOptions} height={80} width={80} />
                  </div>
                ) : (
                  <img className={styles.work_img} src={work.imgURL}></img>
                )}

                <div className={styles.work_cover}>
                  <div className={styles.work_intro}>{work.intro}</div>
                  <div className={styles.work_more}>MORE</div>
                </div>
              </div>
            </Link>
            <div className={styles.work_outside}>
              <div className={styles.work_name}>{work.name}</div>
              <div className={styles.work_keywords}>{work.keywords}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pages}>
        {pagesCount > 1 ? (
          [...Array(pagesCount)].map((page, index) => (
            <button
              key={`page${index}`}
              className={
                pageIndex == index
                  ? `${styles.circle} ${styles.select}`
                  : styles.circle
              }
              onClick={() => {
                setNoAnimation(false);
                setPageIndex(index);
              }}
            ></button>
          ))
        ) : (
          <div style={{ height: '16px' }}></div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
