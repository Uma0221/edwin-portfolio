import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import {
  setPortfolioNavState,
  setSidebarState,
  setSidebarNavClick,
  setSidebarNavState,
} from '../../store/actions';

import worksJson from '../../asset/json/works.json';

function Portfolio() {
  const {
    state: { portfolioNavState },
    dispatch,
  } = useContext(StoreContext);

  const [imgURLArr, setImgURLArr] = useState(null);
  const [imgLoadState, setImgLoadState] = useState(false);

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
        {worksJson[portfolioNavState].works.map((work, index) => (
          <Link
            to={`/Portfolio/${worksJson[portfolioNavState].collection}?index=${index}`}
            key={`work_${index}`}
            className={styles.work}
          >
            <div className={styles.work_bg}>
              {imgLoadState ? (
                ''
              ) : (
                <img className={styles.work_img} src={work.imgURL}></img>
              )}

              <div className={styles.work_name}>{work.name}</div>
              <div className={styles.work_cover}>
                <div className={styles.work_intro}>{work.intro}</div>
                <div className={styles.work_more}>MORE</div>
              </div>
            </div>

            <div className={styles.work_keywords}>{work.keywords}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
