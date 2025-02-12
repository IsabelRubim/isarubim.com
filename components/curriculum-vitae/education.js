import React from "react";

import style from "./style.module.scss";

const Education = () => {
  return (
    <div className={style.section}>
      <h2 className={style.header__secondary}>Education</h2>
      <h3 className={style.header__third}>
        Pontifícia Universidade Católica de Goiás
      </h3>
      <p>
        <strong>Bachelor’s in Computer Engineering</strong>
      </p>
      <p>
        <strong>2016 – 2021</strong>
      </p>
      <p>
        Developed a facial recognition and georeferencing project using Azure
        Cognitive Services and Firebase, resulting in a successful real-world
        application for social impact initiatives.
      </p>
    </div>
  );
};

export default Education;
