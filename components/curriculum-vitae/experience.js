import React from "react";

import style from "./style.module.scss";

const Experience = () => {
  return (
    <div className={style.section}>
      <h2 className={style.header__secondary}>Professional Experience</h2>
      <h3 className={style.header__third}>
        PagBank — <em>Front-end Engineer</em>
      </h3>
      <p>
        <strong>Aug 2022 – Present | Remote</strong>
      </p>
      <ul className={style.experience__list}>
        <li>
          Spearheaded the migration of a monolithic front-end into a
          micro-frontend architecture, improving deployment cycles by 80% and
          enabling independent development for 10+ product teams.
        </li>
        <li>
          Delivered robust, production-grade SPAs using React.js, Next.js, SCSS,
          and Node.js, with a focus on reusability and maintainability.
        </li>
        <li>
          Collaborated with cross-functional teams (design, backend, and
          product) in Agile environments, implementing features that boosted
          customer satisfaction metrics by 20%.
        </li>
        <li>
          Acted as a technical mentor, leading code reviews, providing
          architectural guidance, and ensuring adherence to best practices.
        </li>
      </ul>
      <h3 className={style.header__third}>
        Compass.uol — <em>Front-end Engineer (PagBank contractor)</em>
      </h3>
      <p>
        <strong>Jun 2021 – Jul 2022 | Remote</strong>
      </p>
      <ul className={style.experience__list}>
        <li>
          Integrated into PagBank’s core front-end team, quickly delivering
          impactful features and gaining recognition for technical excellence.
        </li>
      </ul>
      <h3 className={`${style.header__third} ${style.break}`}>
        Qconcursos.com — <em>Front-end Engineer</em>
      </h3>
      <p>
        <strong>Sep 2020 – Jun 2021 | Remote</strong>
      </p>
      <ul className={style.experience__list}>
        <li>
          Developed and optimized interactive landing pages using Svelte,
          React.js, and Tailwind CSS, reducing page load times by 25%.
        </li>
        <li>
          Delivered "pixel-perfect" implementations of complex designs across
          various platforms, enhancing UX consistency.
        </li>
        <li>
          Partnered with marketing teams to create dynamic web experiences that
          increased conversion rates.
        </li>
      </ul>
      <h3 className={style.header__third}>
        Blueway Capital — <em>Software Developer Intern</em>
      </h3>
      <p>
        <strong>Oct 2019 – Aug 2020 | Hybrid</strong>
      </p>
      <ul className={style.experience__list}>
        <li>
          Designed and implemented a multi-site login system using Angular and
          Firebase.
        </li>
        <li>
          Built web scraping pipelines with Puppeteer to collect actionable data
          for NGO matchmaking platforms.
        </li>
        <li>
          Delivered UI/UX prototypes with Figma and integrated them into
          production, ensuring a seamless user experience.
        </li>
      </ul>
    </div>
  );
};

export default Experience;
