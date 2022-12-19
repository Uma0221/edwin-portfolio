import React, { useContext } from 'react';
import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setPortfolioNavState, setSidebarState } from '../../store/actions';

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
            key={collection}
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
    </div>
  );
}

export default Portfolio;
