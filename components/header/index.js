import Image from "next/image";
import Link from "next/link";

import styles from "./style.module.scss";
import utilStyles from "../../styles/utils.module.scss";

import { name } from "../../utils";

export default function Header({ home = false }) {
  return (
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
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      )}
    </header>
  );
}
