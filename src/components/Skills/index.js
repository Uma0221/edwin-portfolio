import React from 'react';
import styles from './styles.module.scss';

import contentBG from '../../asset/imgs/banner/Content3.png';
import SkillsPNG from '../../asset/imgs/banner/BTitle_SKILLS.png';

function Skills() {
  return (
    <div className={styles.container}>
      <img className={styles.contentBG} src={contentBG}></img>
      <img className={styles.title} src={SkillsPNG}></img>
    </div>
  );
}

export default Skills;
