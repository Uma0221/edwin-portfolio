import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setPortfolioNavState, setSidebarState } from '../../store/actions';

import worksJson from '../../asset/json/works.json';

function Portfolio() {
  const collections = [
    'MOTION GRAPHICS',
    'UI/UX',
    'VISUAL DESIGN',
    'GAME ART',
    'SKETCH',
    '3D MODLING',
  ];

  const {
    state: { portfolioNavState },
    dispatch,
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        {collections.map((collection, index) => (
          <div
            key={`collection_${index}`}
            className={portfolioNavState == index ? `${styles.select}` : ''}
            onClick={() => {
              setPortfolioNavState(dispatch, { portfolioNavState: index });
              setSidebarState(dispatch, { sidebarState: false });
            }}
          >
            {collection}
          </div>
        ))}
      </div>
      <div className={styles.works}>
        {worksJson[0].works.map((work, index) => (
          <div key={`work_${index}`} className={styles.work}>
            <div className={styles.work_bg}>
              <div className={styles.work_name}>{work.name}</div>
              <div className={styles.work_cover}>
                <div className={styles.work_intro}>{work.intro}</div>
                <div className={styles.work_more}>MORE</div>
              </div>
            </div>
            <div className={styles.work_keywords}>{work.keywords}</div>
            <div className={styles.work_tools}>{work.tools}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
