import React from 'react';
import styles from './styles.module.scss';

import titleContactPNG from '../../asset/imgs/contact/CTitle_CONTACT.png';
import iconEmailPNG from '../../asset/imgs/contact/Icon_Email.png';
import iconInstagramPNG from '../../asset/imgs/contact/Icon_Instagram.png';
import iconTelegramPNG from '../../asset/imgs/contact/Icon_Telegram.png';
import splitLinePNG from '../../asset/imgs/contact/Img_SplitLine.png';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <img className={styles.contact_title} src={titleContactPNG}></img>
        <div className={styles.contact_text}>
          想進一步了解 / 合作嗎？歡迎以下方聯絡方式
        </div>
        <div className={styles.contact_nav}>
          <div
            className={`${styles.contact_circle} ${styles.contact_personalPhoto}`}
          ></div>
          <a
            href="mailto:eoe172@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contact_circle} ${styles.contact_link}`}
          >
            <div>EMAIL</div>
            <img src={iconEmailPNG}></img>
          </a>
          <a
            href="https://instagram.com/motiondesigner_edwin?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contact_circle} ${styles.contact_link}`}
          >
            <div>INSTAGRAM</div>
            <img src={iconInstagramPNG}></img>
          </a>
          <a
            href="https://t.me/EdwinHuang_0213"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contact_circle} ${styles.contact_link}`}
          >
            <div>TELEGRAM</div>
            <img src={iconTelegramPNG}></img>
          </a>
        </div>
      </div>
      <div className={styles.splitLine}>
        <img src={splitLinePNG}></img>
      </div>
      <div className={styles.footer}>
        <div>Edwin Huang, 2022</div>
      </div>
    </div>
  );
}

export default Contact;
