import React from "react";

import styles from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button className={styles.button} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
