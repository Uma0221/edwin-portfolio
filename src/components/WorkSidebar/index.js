import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setSidebarState } from '../../store/actions';

import worksJson from '../../asset/json/works.json';

function WorkSidebar() {
  const {
    state: { portfolioNavState },
    dispatch,
  } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav}>
          {worksJson[portfolioNavState].works.map((work, index) => (
            <Link
              to="/Portfolio"
              key={`work_${index}`}
              className={styles.nav_item}
              onClick={() => {
                setSidebarState(dispatch, { sidebarState: false });
              }}
            >
              <div>{work.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSidebar;
