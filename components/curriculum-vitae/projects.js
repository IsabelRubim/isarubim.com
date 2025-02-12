import React from "react";

import style from "./style.module.scss";

const Projects = () => {
  return (
    <div className={style.section}>
      <h2 className={style.header__secondary}>Notable Projects</h2>
      <ul className={style["projects-list"]}>
        <li>
          <strong>Micro-frontend Transition (PagBank):</strong> Re-architected
          the front-end ecosystem, allowing faster feature deployment and
          improving overall application reliability.
        </li>
        <li>
          <strong>Translate Transactional E-mail (PagBank):</strong> Developed
          an automated system translating over 600 transactional e-mails,
          improving global communication efficiency.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
