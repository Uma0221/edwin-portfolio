import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

import expJson from '../../asset/json/exp.json';

function Experience() {
  const [expState, setExpState] = useState(0);

  var expItemArr = Array(expJson.length).fill(0);

  var maxPage = 0;
  var pageArr = [];

  var pageExpArr = [];
  var pageYearArr = [];

  for (i = 0; i < expJson.length; i++) {
    var count2 = 0;
    for (j = i; j >= 0; j--) {
      count2 += expJson[j].exp.length;
      if (j == 0) {
        expItemArr[i] = count2;
      }
    }
  }

  function pageItem(item) {
    if (item <= 3) {
      pageArr.push({ yearFlag: false, item: item });
    } else {
      pageArr.push({ yearFlag: true, item: 3 });
      pageItem(item - 3);
    }
  }

  expJson.map((year_exp) => {
    var expLength = parseInt((year_exp.exp.length - 1) / 3) + 1;
    maxPage += expLength;
    pageItem(year_exp.exp.length);
  });

  pageExpArr = Array(pageArr.length).fill(0);
  for (var i = 0; i < pageArr.length; i++) {
    var count1 = 0;
    for (var j = i; j >= 0; j--) {
      count1 += pageArr[j].item;
      if (j == 0) {
        pageExpArr[i] = count1;
      }
    }
  }

  pageYearArr = Array(pageExpArr.length).fill(0);
  for (i = 0; i < pageExpArr.length; i++) {
    if (pageArr[i].yearFlag) {
      pageYearArr[i] = pageExpArr[i - 1];
    } else {
      pageYearArr[i] = pageExpArr[i];
    }
  }

  useEffect(() => {}, [expState]);

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
            <div className={styles.page}>
              {expJson.map((year_exp, year_index) => (
                <div key={`all_exp${year_index}`}>
                  {year_exp.exp.map((exp, exp_index) => (
                    <div key={`exp${exp_index}`}>
                      {exp_index == 0 ? (
                        <div
                          className={styles.year_exp}
                          style={{
                            top:
                              year_index > 0
                                ? expState > 0
                                  ? `${
                                      (expItemArr[year_index - 1] +
                                        exp_index -
                                        pageYearArr[expState - 1]) *
                                        76 +
                                      36
                                    }px`
                                  : `${
                                      (expItemArr[year_index - 1] + exp_index) *
                                        76 +
                                      36
                                    }px`
                                : expState > 0
                                ? `${
                                    (exp_index - pageYearArr[expState - 1]) *
                                      76 +
                                    36
                                  }px`
                                : `${exp_index * 76 + 36}px`,
                          }}
                        >
                          {year_exp.year}
                        </div>
                      ) : (
                        <></>
                      )}

                      <div
                        className={styles.exp}
                        style={{
                          top:
                            year_index > 0
                              ? expState > 0
                                ? `${
                                    (expItemArr[year_index - 1] +
                                      exp_index -
                                      pageExpArr[expState - 1]) *
                                      76 +
                                    36
                                  }px`
                                : `${
                                    (expItemArr[year_index - 1] + exp_index) *
                                      76 +
                                    36
                                  }px`
                              : expState > 0
                              ? `${
                                  (exp_index - pageExpArr[expState - 1]) * 76 +
                                  36
                                }px`
                              : `${exp_index * 76 + 36}px`,
                        }}
                      >
                        <div className={styles.exp_line}>{exp.line1}</div>
                        <div className={styles.exp_line}>{exp.line2}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.controller}>
              <button
                className={
                  expState == 0
                    ? `${styles.triangle} ${styles.triangle_rotate} ${styles.triangle_notshow}`
                    : `${styles.triangle} ${styles.triangle_rotate}`
                }
                onClick={() => {
                  setExpState(expState - 1);
                }}
              ></button>
              <button
                className={
                  expState == maxPage - 1
                    ? `${styles.triangle} ${styles.triangle_notshow}`
                    : styles.triangle
                }
                onClick={() => {
                  setExpState(expState + 1);
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
