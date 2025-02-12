import Image from "next/image";
import Link from "next/link";

import styles from "./style.module.scss";
import utilStyles from "../../styles/utils.module.scss";

import { description, goToLinks, LINKS, siteTitle } from "../../utils";
import RandomColor from "../randomColor";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt={siteTitle}
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {siteTitle}
        </Link>
      </h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.social}`}>
        {LINKS.map(({ id, label, linkExternal, link }) => (
          <RandomColor
            key={id}
            label={label}
            link={link}
            linkExternal={linkExternal}
            onClick={() => goToLinks({ category: "blog", label, link })}
          />
        ))}
      </section>

      <section className={utilStyles.headingMd}>
        <p>{description}</p>
      </section>
    </header>
  );
}
