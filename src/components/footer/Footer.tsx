import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>royalty</div>
      <div className={styles.text}>Royal tech. group . All right reserved</div>
    </div>
  );
};

export default Footer;
