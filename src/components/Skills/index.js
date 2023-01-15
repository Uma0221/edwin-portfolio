import React, { useState } from 'react';
import styles from './styles.module.scss';

import skillsJson from '../../asset/json/skills.json';

import contentBG from '../../asset/imgs/banner/Content3.png';
import SkillsPNG from '../../asset/imgs/banner/BTitle_SKILLS.png';

function Skills() {
  const [skillIndex, setSkillIndex] = useState(0);

  return (
    <div className={styles.container}>
      <img className={styles.contentBG} src={contentBG}></img>
      <img className={styles.title} src={SkillsPNG}></img>
      <div className={styles.score}>
        <div>
          <div className={`${styles.text} ${styles.ch}`}>
            {skillsJson[skillIndex].category ? '程式能力' : '設計能力'}
          </div>
          <div className={`${styles.text} ${styles.en}`}>
            {skillsJson[skillIndex].category ? 'PROGRAM' : 'DESIGN'}
          </div>
        </div>
        <div>
          <div className={`${styles.text} ${styles.ch}`}>熟悉程度</div>
          <div className={`${styles.text} ${styles.en}`}>PROFICIENCY</div>
          <div className={styles.line_bg}>
            <div
              className={styles.line}
              style={{
                width: `${skillsJson[skillIndex].score}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={`${styles.trans_cover} ${styles.top}`}></div>
        {skillsJson.map((skill_item, index) => (
          <div
            key={`skill_${index}`}
            className={
              skillIndex == index
                ? `${styles.text} ${styles.select}`
                : styles.text
            }
            style={{
              top:
                index - skillIndex < -2
                  ? `${(index - skillIndex + skillsJson.length) * 26 + 24}px`
                  : (index == skillsJson.length - 1 && skillIndex < 2) ||
                    (index == skillsJson.length - 2 && skillIndex < 1)
                  ? `${(index - skillsJson.length - skillIndex) * 26 + 24}px`
                  : `${(index - skillIndex) * 26 + 24}px`,
              transition:
                index - skillIndex == -3 ||
                (index == skillsJson.length - 1 && skillIndex == 2) ||
                (index == skillsJson.length - 2 && skillIndex == 1) ||
                (index == skillsJson.length - 3 && skillIndex == 0)
                  ? ''
                  : 'top 300ms linear',
            }}
          >
            {skill_item.skill}
          </div>
        ))}
        <div className={`${styles.trans_cover} ${styles.bottom}`}></div>
        <div className={styles.btnBox}>
          <button
            className={styles.btn}
            onClick={() => {
              if (skillIndex == skillsJson.length - 1) {
                setSkillIndex(0);
              } else {
                setSkillIndex(skillIndex + 1);
              }
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
