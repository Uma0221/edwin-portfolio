import React from 'react';
import styles from './styles.module.scss';

import titleSkillsPNG from '../../asset/imgs/BTitle_SKILLS.png';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.contact_title} src={titleSkillsPNG}></img>
        <div className={styles.contact_text}>
          想進一步了解 / 合作嗎？歡迎以下方聯絡方式
        </div>
        <div className={styles.contact_nav}>
          <div className={styles.contact_circle}></div>
          <div className={styles.contact_circle}></div>
          <div className={styles.contact_circle}></div>
          <div className={styles.contact_circle}></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
