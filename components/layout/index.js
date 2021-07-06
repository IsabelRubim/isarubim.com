import Image from 'next/image';
import Link from 'next/link';

import styles from './style.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import ThemeChanger from '../themeChanger';
import Meta from '../meta';

const name = 'Ei, eu sou Isabel Rubim.';
const description = 'Sou Engenheira de Software, tentando ser escritora e entusiasta da tecnologia. Tenho uma grande paixão por criar coisas que envolvam as pessoas e possam impactá-las de uma forma positiva.'
export const siteTitle = 'Isabel Rubim';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <ThemeChanger />
      <Meta 
        title={siteTitle}
        description={description}
        canonical='https://isarubim.com' 
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
                <a className={utilStyles.colorInherit}>
                  {name}
                </a>
              </Link>
            </h2>
          </>
        )}
      </header>    
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Voltar</a>
          </Link>
        </div>
      )}
      {home ?
        (<footer className={styles.creator}>
          Feito com <span>💜</span> Isabel Rubim.
        </footer>)
      : null}
    </div>
  )
}