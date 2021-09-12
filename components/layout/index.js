import Image from "next/image";
import Link from "next/link";

import styles from "./style.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import ThemeChanger from "../themeChanger";
import Meta from "../meta";
import { name, description, siteTitle } from "../../utils";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <ThemeChanger />
      <Meta
        title={siteTitle}
        description={description}
        canonical="https://isarubim.com"
      />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <section className={styles.wrapper}>
        <main>{children}</main>

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Voltar</a>
            </Link>
          </div>
        )}
        <footer className={styles.creator}>
          Feito com <span>💜</span> {siteTitle}.
        </footer>
      </section>
    </div>
  );
}
