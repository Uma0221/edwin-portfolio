import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';

import worksImageJson from '../../asset/json/worksImage.json';

function WorkInfoBox() {
  const {
    state: { portfolioNavState, workState },
  } = useContext(StoreContext);

  useEffect(() => {
    window.scrollTo(top);
  }, []);

  return (
    <div className={styles.container}>
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
