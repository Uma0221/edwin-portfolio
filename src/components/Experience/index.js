import React, { useContext, useEffect } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setExpState } from '../../store/actions';

import expJson from '../../asset/json/exp.json';

function Experience() {
  var maxPage = 0;

  expJson.map((year_exp) => {
    maxPage = maxPage + parseInt((year_exp.exp.length - 1) / 3) + 1;
  });

  const {
    state: { expState },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    console.log(expState);
  }, [expState]);

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
              <div className={styles.yearExp_block}>
                <div>
                  {expJson.map((year_exp, index) => (
                    <div key={`year_exp${index}`} className={styles.year_exp}>
                      {year_exp.year}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.all_exp}>
                {expJson.map((year_exp, index) => (
                  <div key={`all_exp${index}`}>
                    {year_exp.exp.map((exp, index) => (
                      <div key={`exp${index}`} className={styles.exp}>
                        <div className={styles.exp_line}>{exp.line1}</div>
                        <div className={styles.exp_line}>{exp.line2}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.controler}>
              <button
                className={
                  expState == 0
                    ? `${styles.triangle} ${styles.triangle_rotate} ${styles.triangle_notshow}`
                    : `${styles.triangle} ${styles.triangle_rotate}`
                }
                onClick={() => {
                  setExpState(dispatch, { expState: expState - 1 });
                }}
              ></button>
              <button
                className={
                  expState == maxPage - 1
                    ? `${styles.triangle} ${styles.triangle_notshow}`
                    : styles.triangle
                }
                onClick={() => {
                  setExpState(dispatch, { expState: expState + 1 });
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
