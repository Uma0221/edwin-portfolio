import React from 'react';
import styles from './styles.module.scss';

function Protfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div>MOTION GRAPHICS</div>
        <div>UI/UX</div>
        <div>VISUAL DESIGN</div>
        <div>GAME ART</div>
        <div>SKETCH</div>
        <div>3D MODLING</div>
      </div>
    </div>
  );
}

export default Protfolio;
