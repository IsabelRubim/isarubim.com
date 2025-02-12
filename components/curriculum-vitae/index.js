import React from "react";

import Header from "./header";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";

import style from "./style.module.scss";

const CurriculumVitae = () => {
  return (
    <>
      <div className={style.container}>
        <Header />

        <Experience />

        <Education />

        <Projects />
      </div>
    </>
  );
};

export default CurriculumVitae;
