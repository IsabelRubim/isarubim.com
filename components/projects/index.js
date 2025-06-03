import { useState, useEffect } from 'react';
import Image from 'next/image';

import LinkColor from '../link-color';
import { getStringWithSeparator, PROJECTS_DETAILS } from '../../utils';

import utilStyles from '../../styles/utils.module.scss';
import styles from './style.module.scss';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedStacks, setExpandedStacks] = useState({});

  const selectedRepos = ['web3-todo-monorepo'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await Promise.all(
          selectedRepos.map(async (repo) => {
            const response = await fetch(
              `https://api.github.com/repos/IsabelRubim/${repo}`
            );
            if (response.ok) {
              return await response.json();
            }
            return null;
          })
        );

        setProjects(projectsData.filter((project) => project !== null));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading projects...</div>;
  }

  const getProjectsDetails = (projectName) => {
    return PROJECTS_DETAILS[projectName] || {};
  };

  const toggleStackAccordion = (projectId) => {
    setExpandedStacks((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section className={styles.projectsSection}>
      <h2 className={utilStyles.headingLg}>☄️ Projects</h2>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={getProjectsDetails(project.name).image}
                alt={`Preview ${project.name}`}
                width={940}
                height={600}
                onError={(e) => {
                  e.target.src = '/projects/default-preview.png';
                }}
              />
            </div>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>
                {getProjectsDetails(project.name).label}
              </h3>

              <div className={styles.fullStack}>
                {getProjectsDetails(project.name)?.fullStack.map((stack) => (
                  <p className={utilStyles.tag}>{stack}</p>
                ))}
              </div>

              <p className={styles.projectDescription}>
                {getStringWithSeparator(project.description, 110)}
              </p>

              <div className={styles.stackContainer}>
                <h4
                  className={`${styles.stackTitle} ${styles.stackTitleClickable}`}
                  onClick={() => toggleStackAccordion(project.id)}
                >
                  Stack
                  <span
                    className={`${styles.accordionIcon} ${
                      expandedStacks[project.id] ? styles.expanded : ''
                    }`}
                  >
                    ⌄
                  </span>
                </h4>

                <div
                  className={`${styles.stackContent} ${
                    expandedStacks[project.id] ? styles.expanded : ''
                  }`}
                >
                  <div className={styles.stackTags}>
                    {getProjectsDetails(project.name)?.languages ? (
                      <>
                        <strong>Languages:</strong>
                        {getProjectsDetails(project.name).languages.map(
                          (language, idx) => (
                            <span key={idx} className={styles.stackTag}>
                              {language}
                            </span>
                          )
                        )}
                      </>
                    ) : null}
                  </div>
                </div>

                <div
                  className={`${styles.stackContent} ${
                    expandedStacks[project.id] ? styles.expanded : ''
                  }`}
                >
                  <div className={styles.stackTags}>
                    {getProjectsDetails(project.name)?.libraries ? (
                      <>
                        <strong>Libraries:</strong>
                        {getProjectsDetails(project.name).libraries.map(
                          (library, idx) => (
                            <span key={idx} className={styles.stackTag}>
                              {library}
                            </span>
                          )
                        )}
                      </>
                    ) : null}
                  </div>
                </div>
                <div
                  className={`${styles.stackContent} ${
                    expandedStacks[project.id] ? styles.expanded : ''
                  }`}
                >
                  <div className={styles.stackTags}>
                    {getProjectsDetails(project.name)?.tools ? (
                      <>
                        <strong>Tools:</strong>
                        {getProjectsDetails(project.name).tools.map(
                          (stack, idx) => (
                            <span key={idx} className={styles.stackTag}>
                              {stack}
                            </span>
                          )
                        )}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className={styles.projectLinks}>
                <LinkColor
                  label='See repository'
                  link={project.html_url}
                  linkExternal={true}
                />
                {project.homepage && (
                  <LinkColor
                    label='See project'
                    link={project.homepage}
                    linkExternal={true}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
