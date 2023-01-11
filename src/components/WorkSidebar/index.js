import React, { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { StoreContext } from '../../store/reducer';
import { setSidebarState, setWorkState } from '../../store/actions';

import worksJson from '../../asset/json/works.json';

function WorkSidebar() {
  const navigate = useNavigate();

  const {
    state: { portfolioNavState, workState },
    dispatch,
  } = useContext(StoreContext);

  useEffect(() => {
    if (workState == -1) {
      navigate('/Portfolio');
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav}>
          {worksJson[portfolioNavState].works.map((work, index) => (
            <Link
              to={`/Portfolio/${worksJson[portfolioNavState].collection}/${work.name}`}
              key={`work_${index}`}
              className={
                workState == index
                  ? `${styles.nav_item} ${styles.select}`
                  : `${styles.nav_item}`
              }
              onClick={() => {
                setSidebarState(dispatch, { sidebarState: false });
                setWorkState(dispatch, { workState: index });
              }}
            >
              <div>{work.name}</div>
            </Link>
          ))}
          <Link
            to="/Portfolio"
            className={styles.nav_item}
            onClick={() => {
              setSidebarState(dispatch, { sidebarState: false });
              setWorkState(dispatch, { workState: -1 });
            }}
          >
            <div>HOME</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkSidebar;
