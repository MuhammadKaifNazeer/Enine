import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
