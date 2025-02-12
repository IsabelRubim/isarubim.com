import React from "react";

import style from "./style.module.scss";

const Skills = () => {
  return (
    <div className={style.section}>
      <h2 className={style.header__secondary}>Technical Skills</h2>
      <h3 className={style.header__third}>Hard Skills</h3>
      <ul className={style["skills-list"]}>
        <li>
          <strong>Languages & Frameworks:</strong> JavaScript (ES6+),
          TypeScript, React.js, Next.js, Svelte, Node.js
        </li>
        <li>
          <strong>Testing & Quality:</strong> Jest, Storybook, Unit Testing,
          Integration Testing
        </li>
        <li>
          <strong>Architecture:</strong> SPA Development, Micro-frontend Design,
          State Management, REST APIs
        </li>
        <li>
          <strong>Tools & Platforms:</strong> Docker, AWS, Kubernetes, Firebase,
          CI/CD Pipelines, Observability (Grafana, New Relic)
        </li>
        <li>
          <strong>Other:</strong> CSS-in-JS, SCSS, Tailwind CSS, Responsive
          Design
        </li>
      </ul>
      <h3 className={style.header__third}>Soft Skills</h3>
      <ul className={style["skills-list"]}>
        <li>
          Strong leadership and mentoring capabilities in distributed teams
        </li>
        <li>Collaborative problem-solving in Agile workflows (Scrum/Kanban)</li>
        <li>Proven ability to innovate and deliver under tight deadlines</li>
      </ul>
    </div>
  );
};

export default Skills;
