import LinkColor from '../link-color';

import { description, goToLinks, LINKS, siteTitle } from '../../utils';

import styles from './style.module.scss';
import utilStyles from '../../styles/utils.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={`${utilStyles.headingLg} ${utilStyles.myName}`}>
        {siteTitle}
      </h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.social}`}>
        {LINKS.map(({ id, label, linkExternal, link }) => (
          <LinkColor
            key={id}
            label={label}
            link={link}
            linkExternal={linkExternal}
            onClick={() => goToLinks({ category: 'header', label, link })}
          />
        ))}
      </section>

      <section className={utilStyles.headingMd}>
        <p>{description}</p>
      </section>
    </header>
  );
}
