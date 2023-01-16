import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/somi-jeon">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
