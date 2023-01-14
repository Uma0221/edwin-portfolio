import React, { useContext, useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';

import worksImageJson from '../../asset/json/worksImage.json';

function WorkInfoBox() {
  const {
    state: { portfolioNavState, workState },
  } = useContext(StoreContext);

  const [carouselOldIndex, setcarouselOldIndex] = useState(0);
  const [carouselClickIndex, setcarouselClickIndex] = useState(0);
  const [infoFlag, setInfoFlag] = useState(false);

  const [refHeight, setRefHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(top);
    setcarouselOldIndex(0);
    setcarouselClickIndex(0);
    setInfoFlag(false);
  }, [workState]);

  useEffect(() => {
    if (worksImageJson[portfolioNavState]?.works[workState]?.pictures) {
      if (!infoFlag) {
        const count = setInterval(() => {
          setcarouselOldIndex(carouselClickIndex);
          if (
            carouselClickIndex ==
            worksImageJson[portfolioNavState]?.works[workState]?.pictures
              .length -
              1
          ) {
            setcarouselClickIndex(0);
          } else {
            setcarouselClickIndex(carouselClickIndex + 1);
          }
        }, 5000);
        return () => clearInterval(count);
      }
    }
  }, [carouselClickIndex, infoFlag]);

  useEffect(() => {
    if (ref.current) {
      setRefHeight(ref.current.clientHeight);
    }
  }, [ref.current?.clientHeight]);

  useEffect(() => {}, [refHeight]);

  return (
    <div className={styles.container}>
      {worksImageJson[portfolioNavState].works[workState].pictures ? (
        <>
          <div className={`${styles.pictureBox} ${styles.carouselBox}`}>
            {worksImageJson[portfolioNavState].works[workState].pictures.map(
              (item, index) => (
                <img
                  key={`carousel_img${index}`}
                  className={
                    carouselClickIndex == index &&
                    carouselOldIndex == carouselClickIndex
                      ? `${styles.pictureContent} ${styles.carouselItem} ${styles.noMove}`
                      : carouselClickIndex == index &&
                        carouselOldIndex < carouselClickIndex
                      ? `${styles.pictureContent} ${styles.carouselItem} ${styles.RtoM}`
                      : carouselClickIndex == index &&
                        carouselOldIndex > carouselClickIndex
                      ? `${styles.pictureContent} ${styles.carouselItem} ${styles.LtoM}`
                      : carouselOldIndex == index &&
                        carouselOldIndex < carouselClickIndex
                      ? `${styles.pictureContent} ${styles.carouselItem} ${styles.MtoL}`
                      : carouselOldIndex == index &&
                        carouselOldIndex > carouselClickIndex
                      ? `${styles.pictureContent} ${styles.carouselItem} ${styles.MtoR}`
                      : `${styles.pictureContent} ${styles.carouselItem}`
                  }
                  src={item.url}
                />
              ),
            )}
          </div>

          <div className={styles.carouselIndicators}>
            {worksImageJson[portfolioNavState].works[workState].pictures.map(
              (item, index) => (
                <button
                  key={`carousel_btn${index}`}
                  className={
                    carouselClickIndex == index
                      ? `${styles.circle} ${styles.select}`
                      : styles.circle
                  }
                  onClick={() => {
                    setInfoFlag(false);
                    setcarouselOldIndex(carouselClickIndex);
                    setcarouselClickIndex(index);
                  }}
                ></button>
              ),
            )}
          </div>

          <div className={`${styles.captionBox} ${styles.carouselBox}`}>
            {worksImageJson[portfolioNavState].works[workState].pictures.map(
              (item, index) => (
                <div
                  key={`carousel_caption${index}`}
                  className={
                    carouselClickIndex == index &&
                    carouselOldIndex == carouselClickIndex
                      ? `${styles.captionContent} ${styles.carouselItem} ${styles.noMove}`
                      : carouselClickIndex == index &&
                        carouselOldIndex < carouselClickIndex
                      ? `${styles.captionContent} ${styles.carouselItem} ${styles.RtoM}`
                      : carouselClickIndex == index &&
                        carouselOldIndex > carouselClickIndex
                      ? `${styles.captionContent} ${styles.carouselItem} ${styles.LtoM}`
                      : carouselOldIndex == index &&
                        carouselOldIndex < carouselClickIndex
                      ? `${styles.captionContent} ${styles.carouselItem} ${styles.MtoL}`
                      : carouselOldIndex == index &&
                        carouselOldIndex > carouselClickIndex
                      ? `${styles.captionContent} ${styles.carouselItem} ${styles.MtoR}`
                      : `${styles.captionContent} ${styles.carouselItem}`
                  }
                >
                  <div className={styles.captionTitle}>{item.title}</div>
                  {item.info ? (
                    <button
                      className={styles.captionbtn}
                      onClick={() => {
                        setInfoFlag(!infoFlag);
                      }}
                    >
                      {infoFlag ? '收起資訊 V' : '查看更多 N'}
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              ),
            )}
          </div>

          <div
            className={styles.infoBox}
            style={
              infoFlag && refHeight != 0
                ? { height: refHeight + 27 }
                : { height: '0' }
            }
          >
            <div ref={ref} className={styles.captionInfo}>
              {
                worksImageJson[portfolioNavState].works[workState].pictures[
                  carouselClickIndex
                ].info
              }
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {worksImageJson[portfolioNavState].works[workState].videos ? (
        <>
          {worksImageJson[portfolioNavState].works[workState].videos.map(
            (video, index) => (
              <div key={`video${index}`} className={styles.videoBox}>
                <iframe
                  src={video.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={styles.videoContent}
                ></iframe>
                <div className={styles.videoCaption}>{video.caption}</div>
              </div>
            ),
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WorkInfoBox;
