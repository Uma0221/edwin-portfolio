import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import introJson from '../../asset/json/intro.json';

function Intro() {
  const [introState, setIntroState] = useState(0);

  useEffect(() => {}, [introState]);

  return (
    <div className={styles.container}>
      <div className={styles.window_shadow}>
        <div className={styles.window}>
          <div className={styles.titlebar}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>

          <div className={styles.content}>
            {introState == 0 ? (
              <div className={`${styles.page} ${styles.page1}`}>
                <div className={styles.headshot_bg2}>
                  <div className={styles.headshot_bg1}>
                    <div className={styles.headshot}></div>
                  </div>
                </div>

                <div className={styles.intro_text}>
                  <div className={styles.name}>黃宥穎</div>
                  <div className={styles.position_ch}>數位設計師 兼 創作者</div>
                  <div className={styles.position_en}>
                    Digital Designer, Creator
                  </div>
                </div>
              </div>
            ) : introState == 1 ? (
              <div className={`${styles.page} ${styles.page2}`}>
                <div className={styles.title}>EDUCATION</div>

                <div className={styles.degree}>
                  <div className={styles.degree_ch}>
                    國立臺北教育大學 數位科技設計學系
                  </div>
                  <div className={styles.degree_en}>
                    National Taipei University of Education
                  </div>
                  <div className={styles.degree_en}>
                    Digital Technologies Design
                  </div>
                </div>

                <div className={styles.degree}>
                  <div className={styles.degree_ch}>
                    國立政治大學 數位內容碩士學位學程
                  </div>
                  <div className={styles.degree_en}>
                    National ChengChi University
                  </div>
                  <div className={styles.degree_en}>
                    Graduate Program in Digital Content and Technologies
                  </div>
                </div>
              </div>
            ) : introState == 2 ? (
              <div className={`${styles.page} ${styles.page3}`}>
                <div className={styles.title}>{introJson[0].title}</div>

                <div className={styles.hashtags}>
                  {introJson[0].hashtags.map((hashtags_line, index) => (
                    <div
                      key={`hashtags_line${index}`}
                      className={styles.hashtags_line}
                    >
                      {hashtags_line}
                    </div>
                  ))}
                </div>

                <div className={styles.trait}>
                  {introJson[0].trait.map((trait_item, index) => (
                    <div key={`trait${index}`} className={styles.trait_item}>
                      <div className={styles.trait_heading}>
                        {trait_item.heading}
                      </div>
                      <div className={styles.trait_content}>
                        {trait_item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`${styles.page} ${styles.page4}`}>
                <div className={styles.title}>{introJson[1].title}</div>

                <div className={styles.items_ch}>
                  {introJson[1].items_ch.map((items_ch_line, index) => (
                    <div
                      key={`items_ch_line${index}`}
                      className={styles.items_ch_line}
                    >
                      {items_ch_line}
                    </div>
                  ))}
                </div>

                <div className={styles.items_en}>
                  {introJson[1].items_en.map((items_en_line, index) => (
                    <div
                      key={`items_en_line${index}`}
                      className={styles.items_en_line}
                    >
                      {items_en_line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.controller}>
              <button
                className={
                  introState == 0
                    ? `${styles.triangle} ${styles.triangle_rotate} ${styles.triangle_notshow}`
                    : `${styles.triangle} ${styles.triangle_rotate}`
                }
                onClick={() => {
                  setIntroState(introState - 1);
                }}
              ></button>
              <button
                className={
                  introState == 3
                    ? `${styles.triangle} ${styles.triangle_notshow}`
                    : styles.triangle
                }
                onClick={() => {
                  setIntroState(introState + 1);
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
