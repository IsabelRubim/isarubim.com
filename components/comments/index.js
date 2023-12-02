import React, { useEffect } from "react";

import { appendComments } from "../../lib/comments";

import styles from "./style.module.scss";

export const Comments = () => {
  useEffect(() => {
    appendComments();
  }, []);

  return (
    <>
      <h3 className={styles["title-comments"]}>Comentários</h3>
      <div id="append-comments-here" />
    </>
  );
};
