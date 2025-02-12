import React from "react";

import style from "./style.module.scss";

const Header = () => {
  return (
    <>
      <h1 className={style.header__primary}>Isabel Rubim</h1>
      <h2 className={style.header__subtitle}>Front-end Engineer</h2>
      <div className={style["contact-info"]}>
        📧{" "}
        <a href="mailto:isabelaraujorubim@gmail.com">
          isabelaraujorubim@gmail.com
        </a> |
        🔗{" "}
        <a href="https://linkedin.com/in/isabelrubim">
          linkedin.com/in/isabelrubim
        </a> |
        💻 <a href="https://github.com/isabelrubim">github.com/isabelrubim</a>
      </div>

      <div className={style.section}>
        <h2 className={style.header__secondary}>Summary</h2>
        <p>
          Front-end Engineer with 5+ years of experience delivering scalable,
          high-performance web applications. Expertise in designing and
          developing Single Page Applications (SPAs) using React.js, Next.js,
          and micro-frontend architectures. Proven ability to lead front-end
          projects, mentor developers, and drive user-focused innovations that
          improve customer satisfaction and team productivity.
        </p>
      </div>
    </>
  );
};

export default Header;
