import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={styles.main}>
        <div class={styles.loader}>
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
