import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';

import worksImageJson from '../../asset/json/worksImage.json';

function WorkInfoBox() {
  const {
    state: { portfolioNavState, workState },
  } = useContext(StoreContext);

  const [carouselOldIndex, setcarouselOldIndex] = useState(0);
  const [carouselClickIndex, setcarouselClickIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(top);
    setcarouselOldIndex(0);
    setcarouselClickIndex(0);
  }, [workState]);

  useEffect(() => {
    if (worksImageJson[portfolioNavState]?.works[workState]?.pictures) {
      const count = setInterval(() => {
        setcarouselOldIndex(carouselClickIndex);
        if (
          carouselClickIndex ==
          worksImageJson[portfolioNavState]?.works[workState]?.pictures.length -
            1
        ) {
          setcarouselClickIndex(0);
        } else {
          setcarouselClickIndex(carouselClickIndex + 1);
        }
      }, 5000);
      return () => clearInterval(count);
    }
  }, [carouselClickIndex]);

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
                  <button className={styles.captionbtn}>查看更多 V </button>
                  {/* <div className={styles.captionInfo}>
                BlueRemedy
                海報以夏天氛圍為設計主色，對應遊戲場景中春天、秋天、冬天三個不同的季節組成四季
              </div> */}
                </div>
              ),
            )}
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
