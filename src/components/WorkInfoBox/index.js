import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';

import worksInfoJson from '../../asset/json/worksInfo.json';

function WorkInfoBox() {
  const {
    state: { portfolioNavState, workState },
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.titlebar}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.name}>
            {worksInfoJson[portfolioNavState].works[workState].name}
          </div>

          <div className={`${styles.flex} ${styles.subtitle}`}>
            <div
              className={`${styles.subtitleText} ${styles.collection_padding}`}
            >
              {worksInfoJson[portfolioNavState].collection}
            </div>
            <div className={styles.subtitleText}>
              {worksInfoJson[portfolioNavState].works[workState].year}
            </div>
          </div>

          {worksInfoJson[portfolioNavState].works[workState].keywords_row1 ? (
            <div className={`${styles.flex} ${styles.keywordsRow}`}>
              {worksInfoJson[portfolioNavState].works[
                workState
              ].keywords_row1.map((keyword, index) => (
                <div key={`keywords_row1_${index}`} className={styles.keyword}>
                  {keyword}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
          {worksInfoJson[portfolioNavState].works[workState].keywords_row2 ? (
            <div className={`${styles.flex} ${styles.keywordsRow}`}>
              {worksInfoJson[portfolioNavState].works[
                workState
              ].keywords_row2.map((keyword, index) => (
                <div key={`keywords_row2_${index}`} className={styles.keyword}>
                  {keyword}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}

          <div className={styles.title_padding}>
            <span className={styles.infoTitle}>INTRODUCTION</span>
          </div>
          <div className={styles.infoText}>
            {worksInfoJson[portfolioNavState].works[workState].intro}
          </div>

          {worksInfoJson[portfolioNavState].works[workState].link_title ? (
            <div className={`${styles.flex} ${styles.link_padding}`}>
              <a
                href={worksInfoJson[portfolioNavState].works[workState].link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {worksInfoJson[portfolioNavState].works[workState].link_title}
              </a>
            </div>
          ) : (
            <></>
          )}

          {worksInfoJson[portfolioNavState].works[workState]
            .assignments_name ? (
            <>
              <div className={styles.title_padding}>
                <span className={styles.infoTitle}>ASSIGNMENTS</span>
              </div>
              <div className={styles.infoText}>
                {
                  worksInfoJson[portfolioNavState].works[workState]
                    .assignments_name
                }
              </div>
              {worksInfoJson[portfolioNavState].works[workState]
                .assignments_division ? (
                worksInfoJson[portfolioNavState].works[
                  workState
                ].assignments_division.map((division, index) => (
                  <div
                    key={`division_${index}`}
                    className={`${styles.flex} ${styles.space_between}`}
                  >
                    <div className={styles.infoText}>
                      {division.division_title}
                    </div>
                    <div className={styles.infoText}>
                      {division.division_person}
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkInfoBox;
